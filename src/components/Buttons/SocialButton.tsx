import React, { useState } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import PATH from '../../constants/pathData';
import ERRORCODE from '../../constants/errorCode';
import {Image, Text } from 'react-native';
import { StyledSocialButtonContainerType, StyledSocialButtonContainer} from '../../styles/components/StyledButton';
import {StyledSocialButtonView} from '../../styles/components/StyledView';
import {StyledSocialText} from '../../styles/components/StyledText';
import { NavigationActions } from 'react-navigation';
type Props = StyledSocialButtonContainerType &  {
    navigation?: any;
}


const  SocialButton: React.FC<Props> = (props) => { 
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const source = props.social === 'facebook' ? PATH.Icons.FacebookIcon : PATH.Icons.GoogleIcon;
  const text = props.social === 'facebook' ? 'Continue with facebook' : 'Continue with google';
  const authentication = useAuthenticationStore();
  const signIn = async() => { 
    setButtonDisabled(true);
    let result = 0;
    if(props.social === 'facebook') {
      result =  await authentication.facebookSignIn();
    } else {
      result =  await authentication.googleSignIn();
    }
    
    setButtonDisabled(false);
        if(result === 1) {
            props.navigation.navigate(PATH.Screens.LoggedIn.default, {}, NavigationActions.navigate({ routeName: PATH.Screens.LoggedIn.Home }));
        } else if(result === ERRORCODE.authentication.newUser.code) {
          props.navigation.navigate(PATH.Screens.LoggedOut.Register);
        }
    }
  return (
   
    <StyledSocialButtonContainer social={props.social} disabled={buttonDisabled} onPress={signIn} >
      <StyledSocialButtonView>
        <Image style={{width:40, height:40, marginRight: 24}} source={source} />
        <StyledSocialText social={props.social}> {text} </StyledSocialText>
      </StyledSocialButtonView>
    </StyledSocialButtonContainer>
    )
  }

  export default SocialButton;

