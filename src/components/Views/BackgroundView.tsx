import React, { useState, Fragment } from 'react';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import {useThemeStore} from '../../state/stores/Theme/index';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import PATH from '../../constants/pathData';
import {Container} from '../../styles/components/StyledView';
import StyledStatusBar from '../../styles/components/StyledStatusBar';
import VariantType from '../../types/style/Variant';
import {Text} from 'react-native';
import {StyledBackground, StyledImageBackground} from '../../styles/components/StyledBackground';
type Props  = VariantType & {
  gradient?: boolean
}


const  BackgroundView: React.FC<Props> = (props) => { 
  const source = (props.variant === 'primary') ? PATH.Backgrounds.BlueGradient : PATH.Backgrounds.BrownGradient;
  
  return (
        <Fragment>
            <StyledStatusBar variant={props.variant}/>
            {props.gradient ? (
                <StyledImageBackground source={source}>
                  {props.children}
                </StyledImageBackground> 
            ) : (
              <Container variant={props.variant}>
                {props.children}
              </Container>
            )}
                
        </Fragment>   )
  }

  BackgroundView.defaultProps = {
    variant: 'primary',
    gradient: false
  };

  export default BackgroundView;