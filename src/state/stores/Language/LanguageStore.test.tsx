import {useLocalStore} from 'mobx-react';
import createLanguageStore from './LanguageStore';
import { renderHook, act } from '@testing-library/react-hooks';
import LocalStorage from '../../../util/LocalStorage';
jest.mock("../../../util/LocalStorage");
describe("LanguageStore", () => {

    it("Switch to English", () => {

      jest.mock("../../../util/LocalStorage");
      const store = renderHook(() => useLocalStore(createLanguageStore));
  
      store.result.current.switchLang('english');
      expect(store.result.current.currentLang).toBe('en-US');
      expect(store.result.current.textData.test.test).toBe('Hello World');
      
  
    })

    it("Switch to Spansih", () => {
      LocalStorage.getItem = jest.fn();
      LocalStorage.setItem = jest.fn();
        const store = renderHook(() => useLocalStore(createLanguageStore));
    
        store.result.current.switchLang('espanol');
        expect(store.result.current.currentLang).toBe('es-ES');
        expect(store.result.current.textData.test.test).toBe('Hola Mundo');
        
    
      })

      it("Switch to Dutch", () => {
        LocalStorage.getItem = jest.fn();
      LocalStorage.setItem = jest.fn();
        const store = renderHook(() => useLocalStore(createLanguageStore));
    
        store.result.current.switchLang('nederlands');
        expect(store.result.current.currentLang).toBe('nl-NL');
        expect(store.result.current.textData.test.test).toBe('Hallo Werld');    
      })

   

  })