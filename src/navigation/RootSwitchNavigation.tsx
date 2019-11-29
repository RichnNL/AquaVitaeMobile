import InitiationScreen from '../screens/Initiation/InitiationScreen';
import AuthenticationStack from './AuthenticationStackNavigation';
import ApplicationStack from './AppStackNavigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { Transitioning, Transition } from "react-native-reanimated";
import React from 'react';



const RootSwitchNavigation: any = createAnimatedSwitchNavigator(
    {
      Initiation: { screen: InitiationScreen, navigationOptions: { header: null }},
      Application:  { screen: ApplicationStack, navigationOptions: { header: null }},
      Authentication:  { screen: AuthenticationStack, navigationOptions: { header: null }},
    },
    {
        initialRouteName: 'Initiation',
        transition: (
          <Transition.Together>
            <Transition.Out
              type="slide-right"
              durationMs={600}
              interpolation="easeIn"
              propagation="right"
            />
            <Transition.In 
              type="slide-left"
              durationMs={1300}
              interpolation="easeOut"
              propagation="right" />
          </Transition.Together>
        ),
    }
  );
        

  export default createAppContainer(RootSwitchNavigation);