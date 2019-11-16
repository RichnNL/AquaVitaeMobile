import firebase from 'react-native-firebase';
import {IAuthentication} from '../../state/stores/Authentication/AuthenticationStore';
import {IDatabase} from '../../state/stores/Database/DatabaseStore';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import {AUTH} from '../../constants/authentication';
import ERRORCODE from '../../constants/errorCode';
import User from '../../types/Users/User';
import DB from '../../constants/database';
import RULES from '../../constants/rules';
 class Firebase implements IAuthentication, IDatabase {
        constructor() {}
        async googleSignIn(): Promise<number> {
            try {
                // add any configuration settings here:
                await GoogleSignin.configure({
                    webClientId: AUTH.googleWebClientID,
                    offlineAccess: true, 
                });
                await GoogleSignin.hasPlayServices();
                const data = await GoogleSignin.signIn();
                const tokens = await GoogleSignin.getTokens();
                const credential = firebase.auth.GoogleAuthProvider.credential(tokens.idToken, tokens.accessToken);
                const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
                if(firebaseUserCredential.additionalUserInfo!.isNewUser) {
                    return 1;
                } else {
                    return 1;
                }
            } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    return ERRORCODE.signIn.isCanceled.code;
                  } else if (error.code === statusCodes.IN_PROGRESS) {
                    return ERRORCODE.signIn.loginFailed.code;
                  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    return ERRORCODE.signIn.loginFailed.code;
                  } else {
                    return ERRORCODE.signIn.loginFailed.code;
                  }
            }
        }
        async facebookSignIn(): Promise<number> {
            try {
                const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            
                if (result.isCancelled) {
                 return ERRORCODE.signIn.isCanceled.code;
                }
                const data = await AccessToken.getCurrentAccessToken();
            
                if (!data) {
                  return ERRORCODE.signIn.noAccessToken.code;
                }
        
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                
                const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
                if(firebaseUserCredential.additionalUserInfo!.isNewUser) {
                    const u = firebaseUserCredential.user;
                    const user: User = {screenName: u.displayName!, location: 'Rotterdam', 
                motto: 'Go home', picture: u.photoURL!, initials: u.displayName!.slice(0,3)  }
                this.registerUser(user);  
                    return 1;
                } else {
                    return 1;
                }
              } catch (e) {
                return ERRORCODE.signIn.loginFailed.code;
              }
        }
        isLoggedIn(): Promise<boolean> {
            return new Promise<boolean>( resolve => {
      
                firebase.auth().onAuthStateChanged(( user => {
                    if(user) {
                        console.log(user!.uid);
                        resolve(true)
                    } else {
                        resolve(false);
                    }
                }))
            })   
        }
        getDisplayName(): string {
            if(firebase.auth().currentUser) {
                const name = firebase.auth().currentUser!.displayName;
                if(name) {
                    return name;
                } else {
                    return "";
                }
            }
            return "";
        }
        getEmail(): string {
            if(firebase.auth().currentUser) {
                const email = firebase.auth().currentUser!.email;
                if(email) {
                    return email;
                } else {
                    return "";
                }
            }
            return "";
        }
        getPictureURL(): string {
            if(firebase.auth().currentUser) {
                const url = firebase.auth().currentUser!.photoURL;
                if(url){
                    return url;
                } else {
                    return "";
                }
            }
            return "";   
        }
        logOut(): Promise<boolean> {
           return firebase.auth().signOut().then( ()=> {
                return true;
            }).catch( ()=> {
                return false;
            });
        }

        async deleteAccount(): Promise<number> {
            var user = firebase.auth().currentUser;
            if(user) {
               const accountDeleted = await user!.delete().then(()=> {
                        return 1;
                    }).catch(error => {
                        return ERRORCODE.authentication.loggedOut.code;
                });
                return accountDeleted;
            } else {
                return  ERRORCODE.database.write.code;
            }
            
        }

        async registerUser(user: User): Promise<number> {
            if(user.screenName.length < RULES.screenNameMinLength) {
                return ERRORCODE.register.screenNameTooShort.code;
            }

            const result = await firebase.firestore().collection(DB.UsersList).doc(user.initials).collection('users').doc(user.screenName)
            .set(
                user
            ).then(result => {
                return 1;
            }).catch(error => {
                return ERRORCODE.database.write.code;
            });

            return result;
        } 
        async updateScreenName(screenName: string): Promise<number> {
            var user = firebase.auth().currentUser;
            if(user) {
               return user.updateProfile({
                    displayName: screenName,
                    }).then(function() {
                    return 1
                    }).catch(function(error) {
                    return ERRORCODE.database.write.code;
                    });
            } else {
                return ERRORCODE.authentication.loggedOut.code;
            }
        }
        
 }

 export default new Firebase();