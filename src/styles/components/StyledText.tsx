
import styledComponents from 'styled-components/native';
import VariantType from '../../types/style/Variant';
import styledComponentsTS from 'styled-components-ts';
import * as Theme from '../theme/theme';
import {normalizeText} from '../../util/Measurements';
import SocialButtonType from '../../types/style/SocialButton';
import {Colors} from '../theme/colors';

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

export const StyledSocialText = styledComponentsTS<SocialButtonType>(styledComponents.Text)`
    font-size: ${normalizeText(14)};
    fontFamily: ${Theme.socialFontFamily}
    color: ${Theme.socialButtonTextColor};
    text-align: center;
`;

export const StyledHeaderText = styledComponentsTS<StyledTextType>(styledComponents.Text)`
    font-size: ${normalizeText(60)};
    fontFamily: ${Theme.headerFont}
    color: ${Colors.text.light};
    text-align: center;
    margin-bottom: 10;
    margin-left: 0;
`;

StyledHeaderText.defaultProps = {
    variant: 'primary',
};

StyledSubText.defaultProps = {
    variant: 'primary',
};

StyledUnderlinedText.defaultProps = {
    variant: 'primary',
};




