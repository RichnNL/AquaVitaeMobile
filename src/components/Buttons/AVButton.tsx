import React from 'react';
import {StyledButtonType, ButtonContainer, ButtonText} from '../../styles/StyledButton';
import {useLanguageStore} from '../../state/stores/Language/index';
import {ButtonProps} from 'react-native';

type Props = StyledButtonType & ButtonProps &  {
  onPress: ()=> void,
  title: string
}


export const  AVButton: React.FC<Props> = (props) => { 
  const text = useLanguageStore();
     return (
       <ButtonContainer
       type={props.type}
       btnSize={props.btnSize}
       onPress={props.onPress}
      >
       <ButtonText 
       type={props.type}
       btnSize={props.btnSize}
        > {props.title} </ButtonText>
     </ButtonContainer>)
  }

  AVButton.defaultProps = {
    type: 'primary',
    btnSize: 'medium',
  };
