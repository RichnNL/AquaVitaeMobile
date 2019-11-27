import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import InitiationScreen from '../screens/Initiation/InitiationScreen';
import AuthenticationStack from './AuthenticationStackNavigation';
import ApplicationStack from './AppStackNavigation';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
const RootSwitchNavigation: any = createSwitchNavigator(
    {
      Initiation: { screen: InitiationScreen, navigationOptions: { header: null }},
      Application:  { screen: ApplicationStack, navigationOptions: { header: null }},
      Authentication:  { screen: AuthenticationStack, navigationOptions: { header: null }},
    },
    {
        initialRouteName: 'Initiation',
    }

  );

  export default createAppContainer(RootSwitchNavigation);