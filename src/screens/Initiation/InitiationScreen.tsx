import React, { useEffect, useState } from 'react';
import {Text, Image } from "react-native";
import {useThemeStore} from '../../state/stores/Theme/index';
import { useObserver } from 'mobx-react';
import { useAuthenticationStore } from '../../state/stores/Authentication';
import BackgroundView from '../../components/Views/BackgroundView';
import PATH from '../../constants/pathData';
import { StyledHeaderText, StyledSubText } from '../../styles/components/StyledText';
import Logo from '../../components/Labels/Logo';
import ERRORCODE from '../../constants/errorCode';
import { NavigationActions } from 'react-navigation';

type Props =  {
  navigation: any;
}



const  InitiationScreen: React.FC<Props> = (props) => {  
  
  const themeStore = useThemeStore();
  const authStore = useAuthenticationStore();
  const regions = [ PATH.Regions.campbeltTown, PATH.Regions.canada,
                    PATH.Regions.highlands, PATH.Regions.ireland, 
                    PATH.Regions.islandOfMull, PATH.Regions.islay, 
                    PATH.Regions.isleOfArran, PATH.Regions.isleOfJura,
                    PATH.Regions.isleOfLewisAndHarris, PATH.Regions.isleOfSkype,
                    PATH.Regions.japan, PATH.Regions.kentucky,
                    PATH.Regions.lowlands, PATH.Regions.orkney,
                    PATH.Regions.speyside, PATH.Regions.tennessee];

  const region = Math.floor(Math.random() * regions.length);
  const source: any = regions[region];

  useEffect(()=> {
    themeStore.lockPortrait(true);
    let timeOut;
    authStore.loginSilently().then(loggedIn => {
      timeOut = setTimeout(()=> {
        if(loggedIn === 1) {
          props.navigation.navigate(PATH.Screens.LoggedIn.default);
        } else if(loggedIn === ERRORCODE.authentication.newUser.code) {
          props.navigation.navigate(PATH.Screens.LoggedOut.default, {}, NavigationActions.navigate({ routeName: PATH.Screens.LoggedOut.Register }));
        } else {
          props.navigation.navigate(PATH.Screens.LoggedOut.default);
        }
      }, 1500);
     
    }).catch(error => {
      timeOut = setTimeout(()=> {
        props.navigation.navigate(PATH.Screens.LoggedOut.default);
      }, 1500);
    })
    return ()=> {
      clearTimeout(timeOut);
    }
  }, []);

  return useObserver(() => {
     return <BackgroundView gradient={true} variant='primary'>
              <Logo/>
              <Image resizeMethod='resize' resizeMode='center' source={source} ></Image>
              <StyledSubText >An App for Whisky Enthusiasts</StyledSubText>
            </BackgroundView>
  });
}

InitiationScreen.defaultProps = {
    
  };

  export default InitiationScreen;
 