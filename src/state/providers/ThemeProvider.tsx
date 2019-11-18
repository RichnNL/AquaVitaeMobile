import React, { useEffect } from 'react';
import createThemeStore from '../stores/Theme/ThemeStore';
import { useObserver } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { useLocalStore} from "mobx-react";
import Orientation from  'react-native-orientation-locker';
export interface IThemeProvider {
  children?: React.ReactNode | any; 
 }



const ThemeToggleProvider: React.FC<IThemeProvider> = ({children}) => {   
  useEffect(()=> {
    Orientation.addOrientationListener(_orientationDidChange);
  }, []);
  const _orientationDidChange = (orientation) => {
    if (orientation === 'PORTRAIT') {
      themeStore.isPortrait = true;
    } else {
      themeStore.isPortrait = false;
    }
  };
  const themeStore = useLocalStore(createThemeStore);

  return  (
    <ThemeContext.Provider value={themeStore}>
        <ThemeToggleWrapper>
          {children}
        </ThemeToggleWrapper>
    </ThemeContext.Provider>
  )
}

const ThemeToggleWrapper: React.FC<IThemeProvider> = ({children}) => { 
  const themeStore = React.useContext(ThemeContext);
  if (!themeStore) throw Error("Store shouldn't be null");

  return useObserver(() => {   
     return <ThemeProvider theme={{theme: themeStore.theme, layout: themeStore.layout}}  >
              {children}
            </ThemeProvider>  
    });
}

export default ThemeToggleProvider;