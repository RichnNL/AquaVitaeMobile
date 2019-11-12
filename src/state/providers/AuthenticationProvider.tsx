import React from 'react';
import  AuthenticationStore  from '../stores/Authentication/AuthenticationStore';
import AuthenticationContext from '../context/AuthenticationContext';
import { useLocalStore} from "mobx-react";
import createAuthenticationStore from '../stores/Authentication/AuthenticationStore';

export interface IAuthenticationProvider {
  children?: React.ReactNode | any; 
}

export const AuthenticationProvider: React.FC<IAuthenticationProvider> = ({children}) => { 
  const authenticationStore = useLocalStore(createAuthenticationStore);
  authenticationStore.loginSilently();
  return  (
    <AuthenticationContext.Provider value={authenticationStore}>
          {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationProvider;