import {Colors} from './theme/colors';
import styledComponents from 'styled-components/native';
import VariantType from '../types/style/Variant';
import styledComponentsTS from 'styled-components-ts';
import * as Theme from './theme/theme';
import normalizeText from '../util/NormalizeText';

export type StyledTextType = VariantType & {
    onPress?: ()=> any;
}

export const StyledSubText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${normalizeText(11)};
    fontFamily: ${Theme.textFont};
    color: ${Theme.textColorAccent};
    text-align: center;
`;

export const StyledUnderlinedText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${normalizeText(8)};
    fontFamily: ${Theme.textItalicFont}
    color: ${Theme.textColorSubtle};
    text-align: center;
    textDecorationLine: underline;
    marginTop: ${normalizeText(2)};
`;





