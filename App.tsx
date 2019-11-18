import React, {Fragment} from 'react';
import AppContainer from './src/navigation/AppStackNavigation';
import { useScreens } from "react-native-screens";
import {ThemeProvider} from './src/state/stores/Theme/index';
import {LanguageProvider} from './src/state/stores/Language/index';
import {AuthenticationProvider} from './src/state/stores/Authentication/index';
import {StatusProvider} from './src/state/providers/StatusProvider';
import {DatabaseProvider} from './src/state/providers/DatabaseProvider';

useScreens();
const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  
  return (<Fragment>
          <ThemeProvider>
            <LanguageProvider>
              <AuthenticationProvider>
                <DatabaseProvider>
                  <StatusProvider>
                  <AppContainer/>
                  </StatusProvider>
                </DatabaseProvider>
              </AuthenticationProvider>
            </LanguageProvider>
          </ThemeProvider>
          </Fragment>   
  );
};


export default App;
