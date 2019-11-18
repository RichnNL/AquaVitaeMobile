import React from 'react';
import StatusContext from '../context/StatusContext';
import { useObserver } from 'mobx-react';

const useStatusStore = () => {
    const context = React.useContext(StatusContext);
     if(!context) {
       throw Error("Cannot be null");
     } 
     return useObserver(() => {
        return context;
      });
}

export default useStatusStore;