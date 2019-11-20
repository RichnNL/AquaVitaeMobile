import * as Theme from './theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import VariantType from '../types/style/Variant';

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

export const CenterView = styledComponentsTS<CenterViewType>(styledComponents.View)`
      flex: ${props => props.flex || 1};
      alignItems: center;
      flexDirection: column;    
`;



