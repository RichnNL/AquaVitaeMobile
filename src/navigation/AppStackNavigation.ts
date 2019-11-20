import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LandingScreen from '../screens/Landing/LandingScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import PATH from '../constants/pathData';
const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      path: PATH.Home,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
    Landing: {
      screen: LandingScreen,
      path: PATH.Landing,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
    Register: {
      screen: RegisterScreen,
      path: PATH.Register,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
  }, {
      initialRouteName: 'Landing'
    });


export default createAppContainer(AppNavigator);