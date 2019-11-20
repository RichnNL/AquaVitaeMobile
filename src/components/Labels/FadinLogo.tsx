import React, { useState, Fragment, useEffect } from 'react';
import {StyledViewType} from '../../styles/StyledView';
import { Animated, Dimensions } from 'react-native';
import {PATH} from '../../constants/pathData';

type Props  = StyledViewType & {
   
}


const  FadeInLogo: React.FC<Props> = (props) => { 
    const size = Dimensions.get('window').width - (Dimensions.get('window').width * .10);
    const opacity = new Animated.Value(0);
    const interpolate = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0.85, 1],
      });

    const onLoad = () => {
        Animated.timing(opacity, {
          toValue: 1,
          duration: 7500,
          useNativeDriver: true,
        }).start();
      }
  
      return (
        <Animated.Image
        onLoad={onLoad}
        style={[
          {
            width: size, 
            height: size,
            opacity: opacity,
            transform: [
              {
                scale: interpolate
              },
            ],
          },
        ]}
        source={PATH.LogoImage}
      />
            
      )
    }

FadeInLogo.defaultProps = {
  variant: 'primary',
  };

  export default FadeInLogo;