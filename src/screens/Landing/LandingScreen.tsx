import React from 'react';
import BackgroundView from '../../components/Views/BackgroundView';
import FadeInLogo from '../../components/Labels/FadinLogo';
import { CenterView } from '../../styles/StyledView';
import SocialButton from '../../components/Buttons/SocialButton';
import Terms from '../../components/Labels/Terms';
type Props =  {
  navigation: any;
}



const  LandingScreen: React.FC<Props> = (props) => { 
     return <BackgroundView>
              
              <CenterView flex={4} >
                <FadeInLogo/>
              </CenterView>
              
              <CenterView >
                <SocialButton navigation={props.navigation} social='google' />
              </CenterView>
              
              <CenterView>
                <SocialButton navigation={props.navigation} social='facebook' />
              </CenterView>

              <CenterView>
                <Terms/>
              </CenterView>
            </BackgroundView>
  }

  LandingScreen.defaultProps = {
    
  };

  export default LandingScreen;