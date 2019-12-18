import * as Theme from './../theme/theme';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';
import VariantType from '../../types/style/Variant';

export type StyledViewType = Theme.ThemeType & VariantType & {

}

export type StatusBarType = StyledViewType & Theme.ThemeType & {
  barStyle: 'default' | 'light-content' | 'dark-content'
}

export type CenterViewType = VariantType & {
  flex?: number
  size?: number;
  border?: boolean;
  pos?: string;
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
      justifyContent: ${props => props.pos ? props.pos : 'center'}; 
      margin-right: 5%;
      margin-left: 5%;
      width: ${props => props.size ? props.size : 'auto'};
      maxWidth:  ${props => props.size ? props.size : 'auto'};
      borderRadius: 4;
      borderWidth: ${props => props.border ? 1.25 : 0};
      borderColor: ${Theme.borderColor};
`;

export const StyledSocialButtonView = styledComponents.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

export const StyledRowCenterView = styledComponentsTS<CenterViewType>(styledComponents.View)`
  flexDirection: row;
  justifyContent: ${props => props.pos ? props.pos : 'center'}; 
  alignItems: center;
  alignContent: center;
  margin-right: 5%;
  margin-left: 5%;
  flex: ${props => props.flex || 1};
  height: ${props => props.size ? props.size : 'auto'};
  maxHeight:  ${props => props.size ? props.size : 'auto'};
  borderRadius: 4;
  borderWidth: ${props => props.border ? 1.25 : 0};
  borderColor: ${Theme.borderColor};
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


StyledRowCenterView.defaultProps = {
  variant: 'primary'
}

StyledColCenterView.defaultProps = {
  variant: 'primary'
}