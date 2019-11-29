import React from 'react';
import  createLanguageStore  from '../stores/Language/LanguageStore';
import LanguageContext from '../context/LanguageContext';
import { useLocalStore} from 'mobx-react';




export interface ILanguageProvider {
  children?: React.ReactNode | any; 
}

export const LanguageProvider: React.FC<ILanguageProvider> = ({children}) => { 
  const languageStore = useLocalStore(createLanguageStore);
  languageStore.setLocalLang();

  return  (
    <LanguageContext.Provider value={languageStore}>
          {children}
    </LanguageContext.Provider>
  
  )
}

export default LanguageProvider;