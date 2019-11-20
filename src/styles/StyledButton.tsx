import * as Theme from './theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import VariantType from '../types/style/Variant';
import ButtonSizeType from '../types/style/ButtonSize';
import width from '../util/Width';
export type StyledButtonType = Theme.ThemeType & VariantType & {
  btnSize?: ButtonSizeType;
}

export type StyledButtonContainer = StyledButtonType & Theme.ThemeType & {
  onPress:() => void
}

export type StyledSocialButtonContainer = Theme.ThemeType & {
  onPress?:() => void,
  social: 'facebook' | 'google',
  disabled?: boolean
}

export const ButtonContainer =styledComponentsTS<StyledButtonContainer>(styledComponents.TouchableOpacity)`
	width: 200px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color:  ${Theme.backgroundColorshadow};
`;

export const ButtonText = styledComponentsTS<StyledButtonType>(styledComponents.Text)`
  font-size: ${Theme.buttonFontSize};
  fontFamily: ${Theme.headerFont}
  color: ${Theme.textColor};
	text-align: center;
`;

export const SocialButtonContainer = styledComponentsTS<StyledSocialButtonContainer>(styledComponents.TouchableOpacity)`
  height: 60;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  marginBottom: 20;
  width: ${width(80)};
  borderRadius: 30;
  backgroundColor: ${Theme.socialButtonColor};
`;

export const SocialButtonView = styledComponents.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;


