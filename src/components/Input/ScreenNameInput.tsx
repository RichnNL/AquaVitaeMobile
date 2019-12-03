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

type Props =  {
  defaultName?: string;
}


export const  ScreenNameInput: React.FC<Props> = (props) => { 
  useEffect(()=> {
    if(props.defaultName) {
      let name = props.defaultName;
      name = name.trim();
      name = name.replace(/\s/g, '_');
      setScreenName(name);
      checkScreenName(name, true);
    }
  }, []);
  const [screenName, setScreenName] = useState('');
  const textData = useLanguageStore().textData;
  const validator = Validation;
  const animation = new Animation();
  const dataStore = useDatabaseStore();
  const [valid, setValid] = useState(false);
  const [timeout, setTimeOutState] = useState<any>(null);
  const [screenNameMessage, setScreenNameMessage] = useState(textData.registration.screenName);
  const [availableMessage, setAvailableMessage] = useState(textData.registration.available);
  const [rotation, setRotation] = useState<any>(0);
  const [translationY, setTranslationY] = useState<any>(0);
  const [star, setStar] = useState('*');
  const monkDown = (init = false) => {
      if(valid || init) {
        setValid(false);
        setRotation(animation.getRotation(1100, -90));
        setStar('*');
      }  
    }

    const monkUp = (init = false) => {
      if(!valid && !init) {
        setValid(true);
        setStar('');
        setRotation(animation.getRotation(1100, 0, -90));
        setTranslationY(animation.getBounce(1000, -12, 1100));
      } else if(init) {
        setValid(true);
        setStar('');
        setTranslationY(animation.getBounce(1000, -12, 0));
      }
    }
  const textChanged = text => {
        checkScreenName(text);
  }

  const checkScreenName = (text: string, init = false) => {
    setScreenName(text);
        if(timeout) {
          clearTimeout(timeout);
        }
        const timeOut = setTimeout(async ()=> {
        const result = validator.screenNameValid(text);

        if(result === 1) {
            setScreenNameMessage(textData.registration.screenName);
            try {
              setAvailableMessage('......');
              setScreenNameMessage('Loading');
              const nameIsUnavailable = await dataStore.userNameTaken(text);
              if(!nameIsUnavailable) {
                monkUp(init);
                setAvailableMessage(textData.registration.available);
              } else {
                monkDown(init);
                setAvailableMessage(textData.registration.unavailable);
              }
            } catch {
              monkDown(init);  
            } finally {
              setScreenNameMessage('Screen Name');
            }
          } else {
              monkDown(init);
              setAvailableMessage('');
              const errorMessage = getCodeMessage(result);
                if(errorMessage) {
                  setScreenNameMessage(
                    textData.registration.error[errorMessage]
                  );
                } 
          }
        }, 1200);
      setTimeOutState(timeOut);
  }
      return (
            <StyledColCenterView>
              <StyledRowCenterView>
              <StyledValidationText validated={valid}> {star} </StyledValidationText>
                <MonkIcon rotation={rotation} translationY={translationY} size={20}/>
                <StyledInput 
                    validated={valid} 
                    placeholder='Screen Name'
                    defaultValue = {screenName}
                    onChangeText={textChanged}
                  />
              </StyledRowCenterView>
              <StyledRowSpaceBetweenView >
                <StyledValidationText validated={valid}> {screenNameMessage}</StyledValidationText>
                <StyledValidationText validated={valid}> {availableMessage}</StyledValidationText>
              </StyledRowSpaceBetweenView >
            </StyledColCenterView>
     )
  }

  ScreenNameInput.defaultProps = {

  };
