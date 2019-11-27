import React from 'react';
import BackgroundView from '../../components/Views/BackgroundView';
import Logo from '../../components/Labels/Logo';
import { StyledCenterView } from '../../styles/components/StyledView';
import SocialButton from '../../components/Buttons/SocialButton';
import Terms from '../../components/Labels/Terms';
type Props =  {
  navigation: any;
}



const  LandingScreen: React.FC<Props> = (props) => { 
     return <BackgroundView>
              <StyledCenterView flex={4} >
                <Logo/>
              </StyledCenterView>
              
              <StyledCenterView >
                <SocialButton navigation={props.navigation} social='google' />
              </StyledCenterView>
              
              <StyledCenterView>
                <SocialButton navigation={props.navigation} social='facebook' />
              </StyledCenterView>

              <StyledCenterView>
                <Terms/>
              </StyledCenterView>
            </BackgroundView>
  }

  LandingScreen.defaultProps = {
    
  };

  export default LandingScreen;