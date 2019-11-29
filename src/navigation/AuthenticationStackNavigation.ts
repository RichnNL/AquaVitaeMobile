import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from '../screens/Landing/LandingScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import PATH from '../constants/pathData';
import Animated, { Transition, Easing } from 'react-native-reanimated';

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

//Transition configurations for createStackNavigator
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index } = scene
      return SlideFromRight(index, position, width);
    },
  }
}

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
      initialRouteName: 'Landing',
      transitionConfig: TransitionConfiguration
    });


export default AuthenticationNavigator;