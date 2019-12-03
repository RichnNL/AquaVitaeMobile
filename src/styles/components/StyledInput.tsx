import * as Theme from './../theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import { TextInputProperties, View } from 'react-native';
import {Colors} from '../theme/colors';
import React, { useState } from 'react';
import RULES from '../../constants/rules';
import { normalizeText } from '../../util/Measurements';

export type StyledInputType = & TextInputProperties & {
    validated: boolean;
    defaultValue?: string;
}

export const StyledInput: React.FC<StyledInputType> = (props) => { 
 const [isFocused, setFocused] = useState(false);

 const onFocus = () => {
     setFocused(true);
 }

 const onBlur = () => {
     setFocused(false);
 }
       return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <Input 
                    validated={props.validated}
                    placeholder={props.placeholder}
                    autoCompleteType='username'
                    defaultValue={props.defaultValue}
                    maxLength={RULES.screenNameMaxLength}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChangeText={props.onChangeText}
                    placeholderTextColor={Colors.primary.default}
                    selectionColor={Colors.primary.default}
                    underlineColorAndroid={isFocused ? (props.validated ? Colors.accent.light : Colors.accent.dark) : Colors.primary.default}
                />
                <View style={{flex:0.2}}></View>
            </View>
         </View>
       )
    }


export const Input = styledComponentsTS<StyledInputType>(styledComponents.TextInput)`
    height: 60;
    paddingLeft: 6;
    flex: 0.8;
    paddingBottom: 0;
    paddingRight: 10;
    marginRight: 12;
    paddingHorizontal: 25;
    flexDirection: row;
    marginBottom: 0;
    paddingTop: 25;
    font-size: ${normalizeText(15)};
`;



