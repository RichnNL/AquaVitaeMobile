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

export const StyledColCenterView = styledComponentsTS<CenterViewType>(styledComponents.View)`
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

export const StyledRowCenterView = styledComponents.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  margin-right: 15;
  margin-left: 15;
`;
export const StyledRowSpaceBetweenView = styledComponents.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  margin-right: 65;
  margin-left: 35;
  alignContent: space-between;
  alignSelf: stretch;
`;


