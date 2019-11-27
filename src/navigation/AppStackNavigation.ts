import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LandingScreen from '../screens/Landing/LandingScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import PATH from '../constants/pathData';
const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      path: PATH.Screens.LoggedIn.Home,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
  }, {
      initialRouteName: 'Home'
    });


export default AppNavigator;