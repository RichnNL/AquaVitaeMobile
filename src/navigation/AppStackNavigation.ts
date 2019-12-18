import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import PATH from '../constants/pathData';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
const AppNavigator = createStackNavigator({
    Home: {
      screen: gestureHandlerRootHOC(HomeScreen),
      path: PATH.Screens.LoggedIn.Home,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
  }, {
      initialRouteName: 'Home'
    });


export default AppNavigator;