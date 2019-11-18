import React, { useState, Fragment } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import {useThemeStore} from '../../state/stores/Theme/index';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import PATH from '../../constants/pathData';
import {Container, StatusBar} from '../../styles/StyledView';
type Props =  {
    children?: React.ReactNode | any; 
}


const  BackgroundView: React.FC<Props> = (props) => { 
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const signIn = () => { 
    
//     }
  return (
        <Fragment>
            <StatusBar/>
                <Container type={'primary'}>
                    {props.children}
                </Container> 
        </Fragment>   )
  }

  export default BackgroundView;