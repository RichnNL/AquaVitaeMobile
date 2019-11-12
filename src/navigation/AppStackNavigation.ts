import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LandingScreen from '../screens/Landing/LandingScreen';

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Landing: {
      screen: LandingScreen
    },
  }, {
      initialRouteName: "Home",
    });


export default createAppContainer(AppNavigator);