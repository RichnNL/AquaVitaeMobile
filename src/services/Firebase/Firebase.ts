import firebase from 'react-native-firebase';
import {IAuthentication} from '../../state/stores/Authentication/AuthenticationStore';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import {AUTH} from '../../constants/authentication';
import ERRORCODE from '../../constants/errorCode';

 class Firebase implements IAuthentication {
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
 }

 export default new Firebase();