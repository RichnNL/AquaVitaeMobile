import React from 'react';
import  createDatabaseStore  from '../stores/Database/DatabaseStore';
import DatabaseContext from '../context/DatabaseContext';
import { useLocalStore} from "mobx-react";




export interface IDatabaseProvider {
  children?: React.ReactNode | any; 
}

export const DatabaseProvider: React.FC<IDatabaseProvider> = ({children}) => { 
  const DatabaseStore = useLocalStore(createDatabaseStore);

  return  (
    <DatabaseContext.Provider value={DatabaseStore}>
          {children}
    </DatabaseContext.Provider>
  
  )
}

export default DatabaseProvider;