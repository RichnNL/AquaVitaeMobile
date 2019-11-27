import React, { useDebugValue, useState, useEffect, Fragment } from 'react';
import {StyledButtonType, ButtonContainer, ButtonText} from '../../styles/components/StyledButton';
import {useLanguageStore} from '../../state/stores/Language/index';
import {ButtonProps,Text} from 'react-native';
import Animated, { Easing} from 'react-native-reanimated';
import {percentWidth} from '../../util/Measurements';
import PATH from '../../constants/pathData';
import { useAuthenticationStore } from '../../state/stores/Authentication';
import { useObserver } from 'mobx-react';
import useInterval from '../../util/Hooks/useInterval';
type Props = {
  
}


const  Loading: React.FC<Props> = (props) => { 
    const size = percentWidth(10);
    const [iconCount, setIconCount] = useState(1);
    const { set, startClock, stopClock, timing, cond, block, eq, add, Value, Clock, concat} = Animated;
    const [source , setSource] = useState(PATH.Icons.Wheat);
    const icons = [PATH.Icons.Wheat, PATH.Icons.Fermation, PATH.Icons.Barrel ,PATH.Icons.Bottle, PATH.Icons.Glass];
    useInterval(() => {
        if(iconCount === icons.length) {
            setIconCount(0);
        } else {
            setIconCount(iconCount + 1);
        }
        setSource(icons[iconCount]);
    }, 2000);

    const runProgression = () => {
        const rotateRight = new Value(0);
        const clock = new Clock();
        const state =  {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const config = {
            duration: new Value(500),
            toValue: new Value(12),
            easing: Easing.inOut(Easing.circle),
        }

        try {
            return block([
                startClock(clock),
                timing(clock, state, config),
                cond(state.finished, [
                    stopClock(clock),
                    set(rotateRight, add(rotateRight, 1)),
                    set(state.time, 0),
                    set(state.frameTime, 0),
                ]),
                cond(eq(rotateRight, 3), [
                    set(rotateRight, 1)
                ]),
                cond(eq(rotateRight, 1), [
                    set(config.toValue, -24)
                ]),
                cond(eq(rotateRight, 2), [
                    set(config.toValue, 24)
                ]),
                cond(state.finished, [
                    set(state.finished, 0),
                    startClock(clock),
                ]),
                state.position,
            ]);
        } catch {
            return block([
                state.position,
            ]);
        }  
    }
    const rotation = runProgression();
    return useObserver(() => {
    return (
        <Fragment>
            <Animated.Image
            source={source}
            style={{width: size, height: size, 
                    transform: [{ rotate: concat(rotation, 'deg') }] }}/>
        </Fragment>
        
        )
            })
  }

  Loading.defaultProps = {
    variant: 'primary',
    btnSize: 'medium',
  };

export default Loading
