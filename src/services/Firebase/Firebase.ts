import firebase from 'react-native-firebase';
import {IAuthentication} from '../../state/stores/Authentication/AuthenticationStore';
import {IDatabase} from '../../state/stores/Database/DatabaseStore';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import {AUTH} from '../../constants/authentication';
import ERRORCODE from '../../constants/errorCode';
import UserType from '../../types/Users/User';
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
                    return ERRORCODE.authentication.newUser.code;
                } else {
                    const screenName = this.getDisplayName();
                    try {
                     const users = await this.searchScreenName(screenName, 1);
                     if(users.length === 0) {
                         return ERRORCODE.authentication.newUser.code;
                     } else {
                         return 1;
                     }
                    } catch {
                     return ERRORCODE.database.read.code;
                    }
                }
            } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    return ERRORCODE.authentication.isCanceled.code;
                  } else if (error.code === statusCodes.IN_PROGRESS) {
                    return ERRORCODE.authentication.loginFailed.code;
                  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    return ERRORCODE.authentication.loginFailed.code;
                  } else {
                    return ERRORCODE.authentication.loginFailed.code;
                  }
            }
        }
        async facebookSignIn(): Promise<number> {
            try {
                const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            
                if (result.isCancelled) {
                 return ERRORCODE.authentication.isCanceled.code;
                }
                const data = await AccessToken.getCurrentAccessToken();
            
                if (!data) {
                  return ERRORCODE.authentication.noAccessToken.code;
                }
        
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                
                const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
                if(firebaseUserCredential.additionalUserInfo!.isNewUser) {
                    return ERRORCODE.authentication.newUser.code;
                } else {
                    const screenName = this.getDisplayName();
                   try {
                    const users = await this.searchScreenName(screenName, 1);
                    if(users.length === 0) {
                        return ERRORCODE.authentication.newUser.code;
                    } else {
                        return 1;
                    }
                   } catch {
                    return ERRORCODE.database.read.code;
                   }
                }
              } catch (e) {
                return ERRORCODE.authentication.loginFailed.code;
              }
        }
        isLoggedIn(): Promise<boolean> {
            return new Promise<boolean>( resolve => {
      
                firebase.auth().onAuthStateChanged(( user => {
                    if(user) {
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

        async registerUser(user: UserType): Promise<number> {
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

        async searchScreenName(searchName: string, maxCount: number ): Promise<UserType[]> {
            if(searchName.length < RULES.screenNameMinLength) {
                return [];
            } else {
                const initials = searchName.slice(0,3);
                try {
                    const result = await firebase.firestore().collection(DB.UsersList)
                    .doc(initials).collection('users')
                    .where('screenName', '>=', searchName).where('screenName', '<=', searchName + '\uf8ff')
                    .orderBy('screenName').limit(maxCount).get();

                    if(result.size === 0) {
                        return [];
                    } else {
                        const Users: UserType[] = [];
                        result.forEach(document => {
                            if(typeof document.data() === 'object') {
                                const user = document.data() as UserType;
                                Users.push(user);
                            }
                        });
                        return Users;
                    }
                } catch {
                    return [];
                }
            }
          
        }
        
 }

 export default new Firebase();