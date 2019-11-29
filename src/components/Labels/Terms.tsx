import React from 'react';
import {StyledCenterView} from '../../styles/components/StyledView';
import {Linking } from 'react-native';
import {PATH} from '../../constants/pathData';
import { StyledSubText, StyledUnderlinedText } from '../../styles/components/StyledText';
import VariantType from '../../types/style/Variant';


type Props   = VariantType & {
   
}


const  Terms: React.FC<Props> = (props) => { 
 
      return (
            <StyledCenterView>
                <StyledSubText variant={props.variant}>
                    We never post to facebook.
                </StyledSubText>
                <StyledUnderlinedText variant={props.variant} onPress={()=> Linking.openURL(PATH.TermsofService)}>
                    Terms of Service
                </StyledUnderlinedText>
            </StyledCenterView> 
      )
    }

Terms.defaultProps = {
    variant: 'primary',
};

  export default Terms;