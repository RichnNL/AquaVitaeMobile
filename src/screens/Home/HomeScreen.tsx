import React, { Fragment, useState } from 'react';
import {View, Text, Button } from "react-native";
//import { AVButton } from '../../components/Button/AVButton';
import PATH from '../../constants/pathData';
import { AVButton } from '../../components/Button/AVButton';
import {useThemeStore} from '../../state/stores/Theme/index';
import {useLanguageStore} from '../../state/stores/Language/index';
import { useObserver } from 'mobx-react';
import { useAuthenticationStore } from '../../state/stores/Authentication/index';
type Props =  {
  navigation: any;
}



const  HomeScreen: React.FC<Props> = (props) => {  
  const themeStore = useThemeStore();
  const languageStore = useLanguageStore();
  const authentication = useAuthenticationStore();
  const [languages, setLanguages] = useState('');
  const doNothing = ()=> {
    authentication.logOut();
  }
  return useObserver(() => {
     return <View>
                <Text>
                {String(authentication.test)}
                </Text>
                
                
                
                <AVButton title={String(authentication.loggedIn)} onPress={doNothing}></AVButton>
              
            </View>
  });
}

  HomeScreen.defaultProps = {
    
  };

  export default HomeScreen;