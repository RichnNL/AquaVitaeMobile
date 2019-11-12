import React from 'react';
import LanguageContext from '../context/LanguageContext';
import { useObserver } from 'mobx-react';

const useLanguageStore = () => {
    const context = React.useContext(LanguageContext);
     if(!context) {
       throw Error("Cannot be null");
     } 
     return useObserver(() => {
        return context;
      });
}

export default useLanguageStore;