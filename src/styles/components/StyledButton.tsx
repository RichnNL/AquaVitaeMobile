import * as Theme from '../theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import VariantType from '../../types/style/Variant';
import ButtonSizeType from '../../types/style/ButtonSize';
import {percentWidth} from '../../util/Measurements';
import SocialButtonType from '../../types/style/SocialButton';
export type StyledButtonType = Theme.ThemeType & VariantType & {
  btnSize?: ButtonSizeType;
}

export type StyledButtonContainerType = StyledButtonType & Theme.ThemeType & {
  onPress:() => void
}

export type StyledSocialButtonContainerType = Theme.ThemeType & SocialButtonType & {
  onPress?:() => void,
  disabled?: boolean
}

export const ButtonContainer = styledComponentsTS<StyledButtonContainerType>(styledComponents.TouchableOpacity)`
	width: 200px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color:  ${Theme.backgroundColor};
`;

export const ButtonText = styledComponentsTS<StyledButtonType>(styledComponents.Text)`
  font-size: ${Theme.buttonFontSize};
  fontFamily: ${Theme.headerFont}
  color: ${Theme.textColor};
	text-align: center;
`;

export const StyledSocialButtonContainer = styledComponentsTS<StyledSocialButtonContainerType>(styledComponents.TouchableOpacity)`
  height: 45;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  marginBottom: 20;
  width: ${percentWidth(80)};
  borderRadius: 25;
  backgroundColor: ${Theme.socialButtonColor};
`;






