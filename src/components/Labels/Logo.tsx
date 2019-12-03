import React from 'react';
import {StyledViewType, StyledRowCenterView} from '../../styles/components/StyledView';
import {PATH} from '../../constants/pathData';
import { percentWidth} from '../../util/Measurements';
import { Image } from 'react-native';
import { StyledHeaderText } from '../../styles/components/StyledText';
type Props  = StyledViewType & {
   
}


const  Logo: React.FC<Props> = (props) => { 
    const imageSize = percentWidth(13);
    const source: any = PATH.Icons.Logo;
      return (
        <StyledRowCenterView>
            <Image style={{width: imageSize, height: imageSize, marginRight: 0, marginBottom: 2}}  source={source}/>
            <StyledHeaderText> Aqua Vitae </StyledHeaderText>
        </StyledRowCenterView>
            
      )
    }

Logo.defaultProps = {
  variant: 'primary',
  };

  export default Logo;