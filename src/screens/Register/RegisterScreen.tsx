import React from 'react';
import {View, Button } from "react-native";
//import { ButtonAV } from '../../components/Button/ButtonAV';
import PATH from '../../constants/pathData';
type Props =  {
  navigation: any;
}



const  RegisterScreen: React.FC<Props> = (props) => { 
     return <View>
                <Button title="Register" 
onPress={() => props.navigation.navigate('Home')}
/>
            </View>  
  }

  RegisterScreen.defaultProps = {
    
  };

  export default RegisterScreen;