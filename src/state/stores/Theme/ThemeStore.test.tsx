import {useLocalStore} from 'mobx-react';
import createThemeStore from './ThemeStore';
import { renderHook} from '@testing-library/react-hooks';


describe("ThemeStore", () => {

    it("Switch Theme", () => {
      const  store  = renderHook(() => useLocalStore(createThemeStore));

      expect(store.result.current.theme).toBe('light');
      
      store.result.current.toggleTheme();

      expect(store.result.current.theme).toBe('dark');
    })
  })