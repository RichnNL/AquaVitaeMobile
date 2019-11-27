import React from 'react';
import {StyledViewType} from '../../styles/components/StyledView';
import { Animated,  } from 'react-native';
import {PATH} from '../../constants/pathData';
import { percentWidth } from '../../util/Measurements';

type Props  = StyledViewType & {
   
}


const  FadeInLogo: React.FC<Props> = (props) => { 
    const size =  percentWidth(80);
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