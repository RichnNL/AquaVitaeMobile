import React from 'react';
import {StyledButtonType, ButtonContainer, ButtonText} from '../../styles/StyledButton';
import {useLanguageStore} from '../../state/stores/Language/index';
import {ButtonProps} from 'react-native';

type Props = StyledButtonType & ButtonProps &  {
  onPress: ()=> void,
  title: string
}


export const  ButtonAV: React.FC<Props> = (props) => { 
  const text = useLanguageStore();
     return (
       <ButtonContainer
       variant={props.variant}
       btnSize={props.btnSize}
       onPress={props.onPress}
      >
       <ButtonText 
       type={props.variant}
       btnSize={props.btnSize}
        > {props.title} </ButtonText>
     </ButtonContainer>)
  }

  ButtonAV.defaultProps = {
    variant: 'primary',
    btnSize: 'medium',
  };
