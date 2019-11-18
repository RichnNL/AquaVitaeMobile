import * as Theme from './theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';


export type StyledViewType = Theme.ThemeType &  {
  type?: 'primary' | 'secondary';
  btnSize?: 'small' | 'medium' | 'large';
}

export const Container = styledComponentsTS<StyledViewType>(styledComponents.View)`
    flex: 1;
    flexDirection: column;
    alignItems: stretch;
    alignContent: stretch;	
	background-color:  ${Theme.backgroundColor};
`;

export const StatusBar = styledComponents.StatusBar`
    backgroundColor: ${Theme.backgroundColor};
    barStyle: ${Theme.statusBarContent};
`;

