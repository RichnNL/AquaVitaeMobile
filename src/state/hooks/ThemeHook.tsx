import React from 'react';
import { useObserver } from 'mobx-react';
import ThemeContext from '../context/ThemeContext';

export const useThemeStore = () => {
  const context = React.useContext(ThemeContext);
     if(!context) {
       throw Error("Theme Store is null");
     } 
     return useObserver(() => {
        return context;
    });
   }

   export default useThemeStore;