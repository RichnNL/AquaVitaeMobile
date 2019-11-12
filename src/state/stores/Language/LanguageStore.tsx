import {LanguageDataType, 
        SuppportedLanguagesIntialsType, 
        SuppportedLanguages,
        LanguageData,
        LanguageType,
        SuppportedLanguagesFullNameType} from '../../../constants/languageData';
import LocalStorage from '../../../util/LocalStorage';
import { NativeModules } from 'react-native';
import {STORAGEKEY} from '../../../constants/storageKey';



export interface ILanguageStore {
    currentLang:  SuppportedLanguagesIntialsType;
    textData: LanguageDataType ;
    switchLang(languageName: SuppportedLanguagesIntialsType | SuppportedLanguagesFullNameType): any;
    setLocalLang(): any;
    getSupportedLangs(): LanguageType[];
}

const LanguageStore: ILanguageStore = {
  currentLang: "en-US",
  textData: LanguageData["en-US"],
  switchLang(languageName: SuppportedLanguagesIntialsType | SuppportedLanguagesFullNameType) {
      // Can retrieve name based on inputing the initial or full language name
      const index = SuppportedLanguages.findIndex(l => languageName === l.initial || languageName === l.full);
      this.currentLang = SuppportedLanguages[index].initial;
      this.textData = LanguageData[this.currentLang];
    
    
      LocalStorage.setItem(STORAGEKEY.languageKey, this.currentLang);
  },
  setLocalLang() {
    let localLanguage;
    LocalStorage.getItem(STORAGEKEY.languageKey).then(lang => {
      localLanguage = lang;

      if(localLanguage == null) {
        localLanguage = NativeModules.I18nManager.localeIdentifier;
        if(localLanguage != null && localLanguage.length > 3) {
          localLanguage = localLanguage.replace('_','-');
        }
      };

      if(SuppportedLanguages.find(lang => localLanguage === lang.initial)) {
        const index = SuppportedLanguages.findIndex(l => localLanguage === l.initial);
        this.currentLang = SuppportedLanguages[index].initial;
       }
       else {
        this.currentLang = SuppportedLanguages[0].initial;
      }
    }).catch( e => {
      this.currentLang = SuppportedLanguages[0].initial;
    }).finally( ()=> {
      this.textData = LanguageData[this.currentLang];
    });
  },
  getSupportedLangs() {
    return SuppportedLanguages;
  }


}

const createLanguageStore = () => {
  const store = {
    ...LanguageStore
  };

  return store;
};

export type LanguageStoreType = ReturnType<typeof createLanguageStore>;


export default createLanguageStore;


