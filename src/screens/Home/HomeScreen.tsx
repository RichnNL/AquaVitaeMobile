import React, { Fragment, useState, useEffect } from 'react';
import {View, Text, Button } from "react-native";
import {GoogleButton} from '../../components/Buttons/GoogleButton';
import {FacebookButton} from '../../components/Buttons/FacebookButton';
import {useThemeStore} from '../../state/stores/Theme/index';
import {useLanguageStore} from '../../state/stores/Language/index';
import { useObserver } from 'mobx-react';
import { useAuthenticationStore } from '../../state/stores/Authentication/index';
import BackgroundView from '../../components/Views/BackgroundView';
import theme from 'styled-theming';
type Props =  {
  navigation: any;
}



const  HomeScreen: React.FC<Props> = (props) => {  
  
  const themeStore = useThemeStore();
  useEffect(()=> {
    themeStore.lockPortrait(true);
  }, [themeStore]);

  return useObserver(() => {
     return <BackgroundView>
       <Text>{String(themeStore.locked)}</Text>
       <Text>{String(themeStore.isPortrait)}</Text>
       <Text>{String(themeStore.test)}</Text>
              <GoogleButton ></GoogleButton>
              <FacebookButton></FacebookButton>
            </BackgroundView>
  });
}

  HomeScreen.defaultProps = {
    
  };

  export default HomeScreen;