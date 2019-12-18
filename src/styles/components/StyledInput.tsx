import * as Theme from './../theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import { TextInputProperties, View } from 'react-native';
import {Colors} from '../theme/colors';
import React, { useState } from 'react';
import RULES from '../../constants/rules';
import { normalizeText } from '../../util/Measurements';

export type StyledInputType = TextInputProperties & {
    validated: boolean;
    defaultValue?: string;
    maxLength?: number;
    numberOfLines?: number;
}

type InputType = StyledInputType & {
   isFocus: boolean
}

export const StyledInput: React.FC<StyledInputType> = (props) => { 
 const [isFocused, setFocused] = useState(false);

 const onFocus = () => {
     setFocused(true);
 }

 const onBlur = () => {
     setFocused(false);
 }

 const justifyContentStyle = (props.numberOfLines && props.numberOfLines > 1) ? 'flex-start' : 'center';
 const multilineStyle =  (props.numberOfLines && props.numberOfLines > 1) ? true : false;
       return (
        <View style={{flex:1, flexDirection:'column', justifyContent: justifyContentStyle}}>
            <View style={{flexDirection:'row', flex: 1, flexShrink: 1}}>
                <Input 
                    multiline={multilineStyle}
                    isFocus={isFocused}
                    validated={props.validated}
                    placeholder={props.placeholder}
                    autoCompleteType='username'
                    defaultValue={props.defaultValue}
                    maxLength={props.maxLength ? props.maxLength : 1000}
                    numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={Colors.primary.default}
                    selectionColor={Colors.primary.default}
                    underlineColorAndroid={isFocused ? (props.validated ? Colors.accent.light : Colors.accent.dark) : 'transparent'}
                />
             {(props.numberOfLines && props.numberOfLines > 1) ? null :
             <View style={{flex:0.2}}></View>  }
            </View>
         </View>
       )
    }


export const Input = styledComponentsTS<InputType>(styledComponents.TextInput)`
    height: ${props => (props.numberOfLines && props.numberOfLines > 1) ? 'auto' : 60};
    alignSelf: ${props => (props.numberOfLines && props.numberOfLines > 1) ? 'flex-start' : 'center'};
    paddingLeft: 6;
    flex:  ${props => (props.numberOfLines && props.numberOfLines > 1) ? 1 : 0.8};
    paddingBottom: 5;
    paddingRight: 10;
    marginRight: 12;
    flexShrink: ${props => (props.numberOfLines && props.numberOfLines > 1) ? 1 : 0.8};
    marginBottom: 0;
    font-size: ${normalizeText(15)};
    color: ${props => props.isFocus ? 
        Colors.text.default 
        :
        (props.validated ? Colors.accent.light : Colors.accent.dark )}
`;



