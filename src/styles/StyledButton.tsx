import * as Theme from './theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';


export type StyledButtonType = Theme.ThemeType &  {
  type?: 'primary' | 'secondary';
  btnSize?: 'small' | 'medium' | 'large';
}

export type StyledButtonContainer = StyledButtonType & Theme.ThemeType & {
  onPress:() => void
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


