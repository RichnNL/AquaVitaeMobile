import React from 'react';
import {View} from "react-native";
import { ScreenNameInput } from '../../components/Input/ScreenNameInput';
import { useAuthenticationStore } from '../../state/stores/Authentication';
type Props =  {
  navigation: any;
}



const  RegisterScreen: React.FC<Props> = (props) => {
  const authenticationStore = useAuthenticationStore();
  const name = authenticationStore.userName; 
     return <View>
                <ScreenNameInput defaultName={name}/>
            </View>  
  }

  RegisterScreen.defaultProps = {
    
  };

  export default RegisterScreen;