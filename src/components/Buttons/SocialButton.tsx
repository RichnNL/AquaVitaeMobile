import React, { useState } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import PATH from '../../constants/pathData';
import ERRORCODE from '../../constants/errorCode';
import {Image, Text } from 'react-native';
import { StyledSocialButtonContainer, SocialButtonContainer, SocialButtonView } from '../../styles/StyledButton';

type Props = StyledSocialButtonContainer &  {
    navigation?: any;
}


const  SocialButton: React.FC<Props> = (props) => { 
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const source = props.social === 'facebook' ? PATH.FacebookIcon :PATH.GoogleIcon;
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
            props.navigation.navigate(PATH.Landing);
        } else if(result === ERRORCODE.authentication.newUser.code) {
          props.navigation.navigate(PATH.Register);
        }
    }
  return (
   
    <SocialButtonContainer social={props.social} disabled={buttonDisabled} onPress={signIn} >
      <SocialButtonView>
        <Image style={{width:30, height:30, marginRight: 30}} source={source} />
        <Text style={{color: 'white'}}>{text}</Text>
        <Text style={{color: 'white'}}>{authentication.test}</Text>
      </SocialButtonView>
    </SocialButtonContainer>
    )
  }

  export default SocialButton;

