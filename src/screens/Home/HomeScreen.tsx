import React, { useEffect } from 'react';
import {Text } from "react-native";
import {useThemeStore} from '../../state/stores/Theme/index';
import { useObserver } from 'mobx-react';

type Props =  {
  navigation: any;
}



const  HomeScreen: React.FC<Props> = (props) => {  
  
  const themeStore = useThemeStore();
  useEffect(()=> {
    themeStore.lockPortrait(true);
  }, [themeStore]);

  return useObserver(() => {
     return <Text> Home </Text>
  });
}

  HomeScreen.defaultProps = {
    
  };

  export default HomeScreen;