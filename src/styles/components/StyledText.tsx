
import styledComponents from 'styled-components/native';
import VariantType from '../../types/style/Variant';
import styledComponentsTS from 'styled-components-ts';
import * as Theme from '../theme/theme';
import {normalizeText} from '../../util/Measurements';
import SocialButtonType from '../../types/style/SocialButton';
import {Colors} from '../theme/colors';
import { TextProperties } from 'react-native';
import React from 'react';
import FontType from '../../types/style/Font';


export type StyledTextType = VariantType & FontType & {
    onPress?: ()=> any;
    size?: number;
    underline?: boolean;
    marginBottom?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    alignSelf?: string;
    grow?: number;
}

export type StyledValidationTextType = VariantType & TextProperties &{
    validated: boolean;
}



export const StyledSubText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${props => props.size ? normalizeText(props.size) : normalizeText(11)};
    fontFamily: ${Theme.textFont};
    color: ${Theme.textColorAccent};
    text-align: center;
    marginRight: 5;
    marginLeft: 5;
    marginBottom: 5;
`;

export const StyledUnderlinedText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${props => props.size ? normalizeText(props.size) : normalizeText(8)};
    fontFamily: ${Theme.textItalicFont}
    color: ${Theme.textColorSubtle};
    text-align: center;
    textDecorationLine: underline;
    marginTop: ${normalizeText(2)};
`;

export const StyledSocialText = styledComponentsTS<SocialButtonType>(styledComponents.Text)`
    font-size: ${normalizeText(15)};
    fontFamily: ${Theme.socialFontFamily}
    color: ${Theme.socialButtonTextColor};
    text-align: center;
`;

export const StyledHeaderText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${props => props.size ? normalizeText(props.size) : normalizeText(60)};
    fontFamily: ${Theme.headerFont}
    color: ${props => props.variant === 'primary' ? Colors.text.light : Colors.text.dark};
    text-align: center;
    margin-bottom: 10;
    margin-left: 0;
`;
export const StyledSubHeaderText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${props => props.size ? normalizeText(props.size) : normalizeText(20)};
    fontFamily: ${Theme.headerFont}
    color: ${Colors.text.light};
    text-align: right;
    align-self: flex-end;
    margin-bottom: 10;
    margin-left: 0;
    margin-right: 15;
`;

export const StyledText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${props => props.size ? normalizeText(props.size) : normalizeText(12)};
    fontFamily: ${props => props.font && props.font === 'italic' ? Theme.textItalicFont : Theme.textFont};
    color: ${Theme.textColor};
    text-align: center;
    align-self: ${props => props.alignSelf ? props.alignSelf : 'center'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
    margin-left: ${props => props.marginLeft ? props.marginLeft : 2};
    margin-right: ${props => props.marginRight ? props.marginRight : 2};
    margin-top: ${props => props.marginTop ? props.marginTop : 2};
    flex: 1;
    flexGrow: ${props => props.grow ? props.grow : 1};
    padding: 2px;
    borderBottomWidth: ${props => props.underline ? 1 : 0};
`;


export const StyledValidation = styledComponentsTS<StyledValidationTextType>(styledComponents.Text)`
    font-size: ${normalizeText(14)};
    fontFamily: ${Theme.textItalicFont};
    color: ${props => props.validated ? Colors.accent.light : Colors.accent.dark};
    text-align: center;
    marginTop: ${normalizeText(2)};
`;


export const StyledValidationText: React.FC<StyledValidationTextType> = (props) => { 
          return (
           <StyledValidation validated={props.validated}
           ellipsizeMode='head'
           numberOfLines={2}
           variant={props.variant}
           >
                {props.children}
           </StyledValidation>
          )
       }

StyledHeaderText.defaultProps = {
    variant: 'primary',
};
StyledSubHeaderText.defaultProps = {
    variant: 'primary',
};

StyledSubText.defaultProps = {
    variant: 'primary',
};

StyledUnderlinedText.defaultProps = {
    variant: 'primary',
};

StyledValidationText.defaultProps = {
    variant: 'primary',
};

StyledText.defaultProps = {
    variant: 'primary',
};


