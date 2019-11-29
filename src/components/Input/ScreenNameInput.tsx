import React, { useState, Fragment } from 'react';
import {useLanguageStore} from '../../state/stores/Language/index';
import { StyledInput } from '../../styles/components/StyledInput';
import {Text} from 'react-native';


type Props =  {
  defaultName?: string;
}


export const  ScreenNameInput: React.FC<Props> = (props) => { 
  const text = useLanguageStore();
  const [valid, setValid] = useState(false);
  const [test, setTest] = useState(props.defaultName);
  const textChanged = event => {
        setTest(event);
        if(valid) {
            setValid(false);
            if(!/^[a-zA-Z]+$/.test(test!)){

            }
        } else {
            setValid(true);
        }
  }
      return (
          <Fragment>
                <StyledInput validated={valid} placeholder='Screen Name'
                defaultValue = {props.defaultName}
                            onChangeText={textChanged}
                />
          </Fragment>
        
     )
  }

  ScreenNameInput.defaultProps = {

  };
