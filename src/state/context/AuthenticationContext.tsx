import React from 'react';
import {IAuthenticationStore} from '../stores/Authentication/AuthenticationStore';

const AuthenticationContext = React.createContext<IAuthenticationStore | null>(null);

export default AuthenticationContext;