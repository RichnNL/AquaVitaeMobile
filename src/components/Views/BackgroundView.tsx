import React, { useState, Fragment } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import {useThemeStore} from '../../state/stores/Theme/index';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import PATH from '../../constants/pathData';
import {Container} from '../../styles/StyledView';
import StyledStatusBar from '../../styles/StyledStatusBar';
import VariantType from '../../types/style/Variant';
import {StyledBackground} from '../../styles/StyledBackground';
type Props  = VariantType & {
  
}


const  BackgroundView: React.FC<Props> = (props) => { 

  return (
        <Fragment>
            <StyledStatusBar variant={props.variant}/>
                <Container variant={props.variant}>
                    {props.children}
                </Container> 
        </Fragment>   )
  }

  BackgroundView.defaultProps = {
    variant: 'primary',
  };

  export default BackgroundView;