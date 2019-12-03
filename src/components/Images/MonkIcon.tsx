import React, { useState, Fragment } from 'react';
import Animated, { Easing} from 'react-native-reanimated';
import PATH from '../../constants/pathData';
import { useObserver } from 'mobx-react';

type Props = {
  size: number;
  rotation: any;
  translationY: any;
}


const  MonkIcon: React.FC<Props> = (props) => { 
    const {concat} = Animated;
    const source = PATH.Icons.Monk;
    return (
        <Fragment>
            <Animated.Image
            source={source}
            style={{width: props.size, 
                    height: props.size, 
                    marginTop: 30,
                    alignItems: 'center',
                    transform: [{ 
                      rotate: concat(props.rotation, 'deg'),
                      translateY: props.translationY 
                      }] }}/>
        </Fragment>
        );
  }


  MonkIcon.defaultProps = {
  };

export default MonkIcon
