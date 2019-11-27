import React, { useState, Fragment, useEffect } from 'react';
import {StyledViewType, StyledRowView} from '../../styles/components/StyledView';
import {PATH} from '../../constants/pathData';
import { percentWidth} from '../../util/Measurements';
import { Image, Text } from 'react-native';
import { StyledHeaderText } from '../../styles/components/StyledText';
type Props  = StyledViewType & {
   
}


const  Logo: React.FC<Props> = (props) => { 
    const textWidth = percentWidth(65);
    const imageSize = percentWidth(13);
    const source: any = PATH.Icons.Logo;
      return (
        <StyledRowView>
            <Image style={{width: imageSize, height: imageSize, marginRight: 0, marginBottom: 2}}  source={source}/>
            <StyledHeaderText> Aqua Vitae </StyledHeaderText>
        </StyledRowView>
            
      )
    }

Logo.defaultProps = {
  variant: 'primary',
  };

  export default Logo;