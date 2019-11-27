import * as Theme from './../theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import VariantType from '../../types/style/Variant';

export type StyledViewType = Theme.ThemeType & VariantType & {

}

export type StatusBarType = StyledViewType & Theme.ThemeType & {
  barStyle: 'default' | 'light-content' | 'dark-content'
}

export type CenterViewType = {
  flex?: number
}

export const Container = styledComponentsTS<StyledViewType>(styledComponents.View)`
    flex: 1;
    flexDirection: column;
    alignItems: stretch;
    alignContent: center;	
	  background-color:  ${Theme.backgroundColor};
`;

export const StyledCenterView = styledComponentsTS<CenterViewType>(styledComponents.View)`
      flex: ${props => props.flex || 1};
      alignItems: center;
      flexDirection: column; 
      alignContent: center;
      justifyContent: center;
`;

export const StyledSocialButtonView = styledComponents.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

export const StyledRowView = styledComponents.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;



