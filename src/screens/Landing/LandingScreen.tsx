import React from 'react';
import {View, Button } from "react-native";
//import { AVButton } from '../../components/Button/AVButton';
import PATH from '../../constants/pathData';
type Props =  {
  navigation: any;
}



const  LandingScreen: React.FC<Props> = (props) => { 
     return <View>
                <Button title="Go to About" 
onPress={() => props.navigation.navigate('Home')}
/>
            </View>  
  }

  LandingScreen.defaultProps = {
    
  };

  export default LandingScreen;