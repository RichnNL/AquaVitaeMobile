import React, { useState, Fragment, useEffect } from 'react';
import {useLanguageStore} from '../../state/stores/Language/index';
import { StyledInput } from '../../styles/components/StyledInput';
import {Text, View} from 'react-native';
import Validation from '../../util/Validation';
import { StyledRowCenterView, StyledColCenterView, StyledRowSpaceBetweenView } from '../../styles/components/StyledView';
import MonkIcon from '../Images/MonkIcon';
import Animated, { Easing} from 'react-native-reanimated';
import useDatabaseStore from '../../state/hooks/DatabaseHook';
import { getCodeMessage } from '../../constants/errorCode';
import Animation from '../../util/Animation';
import { StyledValidationText } from '../../styles/components/StyledText';
import RULES from '../../constants/rules';

type Props =  {
  setMottoText: (text: string) => any;
  defaultValue?: string;
}


export const  MottoInput: React.FC<Props> = (props) => { 
  
  const textData = useLanguageStore().textData;
  const validator = Validation;
  const [valid, setValid] = useState(true);
  const [timeout, setTimeOutState] = useState<any>(null);
  const [textMottoMessage, setTextMottoMessage] = useState(textData.registration.motto);
  const [text, setText] = useState('');
  const [textMottoLength, setTextMottoLength] = useState('0/' + RULES.mottoMaxLength);
  const textChanged = text => {
        checkMotto(text);
  }

  const checkMotto = (textReceived: string) => {
    setTextMottoLength(textReceived.length + '/' + RULES.mottoMaxLength);
    setText(textReceived);
        if(timeout) {
          clearTimeout(timeout);
        }
        const timeOut = setTimeout(async ()=> {
        const result = validator.mottoValid(textReceived);

        if(result === 1) {
            setTextMottoMessage(textData.registration.motto);
            setValid(true);
            props.setMottoText(textReceived);
          } else {
              const errorMessage = getCodeMessage(result);
              setValid(false);
                if(errorMessage) {
                  setTextMottoMessage(
                    textData.registration.error[errorMessage]
                  );
                } 
          }
        }, 500);
      setTimeOutState(timeOut);
  }
      return (
            <StyledColCenterView>
              <StyledRowCenterView border={true}>
                <StyledInput 
                    validated={valid} 
                    placeholder={textData.registration.mottoExample}
                    onChangeText={textChanged}
                    maxLength={RULES.mottoMaxLength}
                    numberOfLines={3}
                    defaultValue = {props.defaultValue}
                  />
              </StyledRowCenterView>
              <StyledRowSpaceBetweenView >
                <StyledValidationText validated={valid}> {textMottoMessage}</StyledValidationText>
                <StyledValidationText validated={valid}> {textMottoLength}</StyledValidationText>
              </StyledRowSpaceBetweenView >
            </StyledColCenterView>
     )
  }

  MottoInput.defaultProps = {

  };
