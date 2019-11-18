import { LoginButton } from 'react-native-fbsdk';
import React, { useState } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import PATH from '../../constants/pathData';
type Props = {
    navigation?: any;
}


export const  FacebookButton: React.FC<Props> = (props) => { 
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const signIn = async() => { 
    setButtonDisabled(true);
    const result =  await useAuthenticationStore().facebookSignIn();
    setButtonDisabled(false);
        if(result == 1) {
            props.navigation.navigate(PATH.Register);
        }
    }
  return (
    <LoginButton
        onPress={signIn}
        disabled={buttonDisabled}
    />
    )
  }