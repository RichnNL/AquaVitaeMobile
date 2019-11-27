import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from '../screens/Landing/LandingScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import PATH from '../constants/pathData';
const AuthenticationNavigator = createStackNavigator({
    Landing: {
      screen: LandingScreen,
      path: PATH.Screens.LoggedOut.Landing,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
    Register: {
      screen: RegisterScreen,
      path: PATH.Screens.LoggedOut.Register,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
  }, {
      initialRouteName: 'Landing'
    });


export default AuthenticationNavigator;