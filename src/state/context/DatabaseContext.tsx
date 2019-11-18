import React from 'react';
import {IDatabaseStore} from '../stores/Database/DatabaseStore';

const DatabaseContext = React.createContext<IDatabaseStore | null> (null);
export default DatabaseContext;