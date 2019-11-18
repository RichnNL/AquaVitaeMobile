import React, { useState } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import {useThemeStore} from '../../state/stores/Theme/index';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import PATH from '../../constants/pathData';
type Props =  {
    navigation?: any;
}


export const  GoogleButton: React.FC<Props> = (props) => { 
  const color = useThemeStore().theme === 'light' ? GoogleSigninButton.Color.Light : GoogleSigninButton.Color.Dark;
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const signIn = async() => { 
    setButtonDisabled(true);
    const result =  await useAuthenticationStore().googleSignIn();
    setButtonDisabled(false);
        if(result == 1) {
            props.navigation.navigate(PATH.Register);
        }
    }
  return (
        <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={color}
        onPress={signIn}
        disabled={buttonDisabled} />)
  }