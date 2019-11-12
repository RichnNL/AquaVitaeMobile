import React from 'react';
import {AuthenticationContext} from '../stores/Authentication/index';
import {IAuthenticationStore } from '../stores/Authentication/AuthenticationStore';
import { useObserver } from 'mobx-react';

  const useAuthenticationStore = () => {
    const context: IAuthenticationStore | null = React.useContext(AuthenticationContext);
     if(!context) {
       throw Error("Cannot be null");
     } 
  
    return useObserver(() => {
       return context;
     });
}

export default useAuthenticationStore;