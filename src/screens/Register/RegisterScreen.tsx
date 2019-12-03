import React from 'react';
import {View} from "react-native";
import { ScreenNameInput } from '../../components/Input/ScreenNameInput';
import { useAuthenticationStore } from '../../state/stores/Authentication';
import BackgroundView from '../../components/Views/BackgroundView';
type Props =  {
  navigation: any;
}



const  RegisterScreen: React.FC<Props> = (props) => {
  const authenticationStore = useAuthenticationStore();
  const name = authenticationStore.userName; 
     return <BackgroundView>
                <ScreenNameInput defaultName={name}/>
            </BackgroundView>  
  }

  RegisterScreen.defaultProps = {
    
  };

  export default RegisterScreen;