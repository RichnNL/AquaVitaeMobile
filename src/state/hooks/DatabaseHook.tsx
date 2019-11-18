import React from 'react';
import DatabaseContext from '../context/DatabaseContext';
import { useObserver } from 'mobx-react';

const useDatabaseStore = () => {
    const context = React.useContext(DatabaseContext);
     if(!context) {
       throw Error("Cannot be null");
     } 
     return useObserver(() => {
        return context;
      });
}

export default useDatabaseStore;