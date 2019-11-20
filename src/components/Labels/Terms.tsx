import React, { useState, Fragment, useEffect } from 'react';
import {StyledViewType, CenterView} from '../../styles/StyledView';
import { Animated, Dimensions, Linking } from 'react-native';
import {PATH} from '../../constants/pathData';
import { StyledSubText, StyledUnderlinedText } from '../../styles/StyledText';
import VariantType from '../../types/style/Variant';


type Props   = VariantType & {
   
}


const  Terms: React.FC<Props> = (props) => { 
 
      return (
            <CenterView>
                <StyledSubText variant={props.variant}>
                    We never post to facebook.
                </StyledSubText>
                <StyledUnderlinedText variant={props.variant} onPress={()=> Linking.openURL(PATH.TermsofService)}>
                    Terms of Service
                </StyledUnderlinedText>
            </CenterView>

            
      )
    }

Terms.defaultProps = {
    variant: 'primary',
};

  export default Terms;