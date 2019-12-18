import React from 'react';
import {StyledButtonType, ButtonContainer, ButtonText} from '../../styles/components/StyledButton';
import {ButtonProps} from 'react-native';
import VariantType from '../../types/style/Variant';

type Props = StyledButtonType & VariantType & {
  onPress: ()=> void,
  title: string
}


export const  ButtonAV: React.FC<Props> = (props) => { 
     return (
       <ButtonContainer
       variant={props.variant}
       btnSize={props.btnSize}
       onPress={props.onPress}
      >
       <ButtonText 
       variant={props.variant}
       btnSize={props.btnSize}
        > {props.title} </ButtonText>
     </ButtonContainer>)
  }

  ButtonAV.defaultProps = {
    variant: 'primary',
    btnSize: 'medium',
  };
