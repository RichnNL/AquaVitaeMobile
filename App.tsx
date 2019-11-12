import React, {Fragment, useLayoutEffect,  useState} from 'react';
import AppContainer from './src/navigation/AppStackNavigation';
import { useScreens } from "react-native-screens";


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from './src/state/stores/Theme/index';
import {LanguageProvider} from './src/state/stores/Language/index';
import {AuthenticationProvider} from './src/state/stores/Authentication/index';

useScreens();
const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  const [helloworld, setHelloWorld] = useState('');
  
 
  

  return (<Fragment>
          <ThemeProvider>
            <LanguageProvider>
              <AuthenticationProvider>
                <AppContainer/>
              </AuthenticationProvider>
            </LanguageProvider>
          </ThemeProvider>
          </Fragment>   
  );
};


export default App;
