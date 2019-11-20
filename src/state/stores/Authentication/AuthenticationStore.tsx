import Firebase from '../../../services/Firebase/Firebase';
import LocalStorage from '../../../util/LocalStorage';
import {STORAGEKEY} from '../../../constants/storageKey';


export type loggedInWithType = 'facebook' | 'google' | false;


export interface IAuthenticationStore  {
  loggedIn: loggedInWithType;
  userName: string;
  picture: string;
  isLoading: boolean;
  test: string;
  googleSignIn(): Promise<number>;
  facebookSignIn(): Promise<number>;
  logOut(): Promise<boolean>;
  loginSilently(): any;
  deleteAccount(): Promise<number>;
}

export interface IAuthentication  {
  googleSignIn(): Promise<number>;
  facebookSignIn(): Promise<number>;
  isLoggedIn(): Promise<boolean>;
  getDisplayName(): string;
  getEmail(): string;
  getPictureURL(): string;
  logOut(): Promise<boolean>;
  deleteAccount(): Promise<number>;
}

const auth: IAuthentication = Firebase;

const AuthenticationStore: IAuthenticationStore =  {
  loggedIn: false,
  isLoading: false,
  userName: '',
  picture: '',
  test: 'set',
  async googleSignIn() {
    try {
        this.isLoading = true;
        const result = await auth.googleSignIn();
        this.isLoading = false;
        if(result == 1) {
           this.loggedIn = 'google';
           LocalStorage.setItem(STORAGEKEY.loginMethodKey, 'google');
           this.picture = auth.getPictureURL();
           this.userName = auth.getDisplayName();
           return 1;
       }
       return result;
       } catch {
          this.isLoading = false;
          return 0;
         }},
    async facebookSignIn() {
        try {
        this.isLoading = true;
        const result = await auth.facebookSignIn();
        this.isLoading = false;
        this.test = String(result);
        if(result == 1) {
            this.loggedIn = 'facebook';
            LocalStorage.setItem(STORAGEKEY.loginMethodKey, 'facebook');
            this.picture = auth.getPictureURL();
            this.userName = auth.getDisplayName();
            return 1;
        }
        return result;
        } catch {
            this.isLoading = false;
            this.test = 'Error';
            return 0;
          }},
    async logOut() {
        try {
            const result = await auth.logOut();
            if(result) {
                this.loggedIn = false;
                this.picture = '';
                this.userName = '';
                LocalStorage.setItem(STORAGEKEY.loginMethodKey, false);
            }
            return false;
        } catch {
            return false
        }
    },
    loginSilently() {
      auth.isLoggedIn().then(async result => {
      if(result) {
        let previousLoginMethod  = await LocalStorage.getItem(STORAGEKEY.loginMethodKey);
        if(previousLoginMethod == 'facebook') {
          this.loggedIn = 'facebook';
        } else if(previousLoginMethod == 'google' ) {
          this.loggedIn = 'google';
        }
        this.picture = auth.getPictureURL();
        this.userName = auth.getDisplayName();
      }
      });
  },
  async deleteAccount(): Promise<number> {
        const result = await auth.deleteAccount();
        this.test = String(result);
        return result;
  }
  
}

const createAuthenticationStore = () => {
  const store = {
    ...AuthenticationStore
  };

  return store;
};

export default createAuthenticationStore;
export type AuthenticationStoreType = ReturnType<typeof createAuthenticationStore>;



