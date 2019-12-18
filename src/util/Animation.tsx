import Animated, { Easing } from "react-native-reanimated";
import Validation from "./Validation";
import { View, StyleSheet, Animated as ReactAnimated, Platform, Text } from 'react-native';
import { State } from "react-native-gesture-handler";
class Animation {

    getRotation = (duration: number, toValue: number, position: number = 0) => {
        const { set, startClock, stopClock, timing, cond, block, Value, Clock} = Animated;
        const clock = new Clock();
        const state =  {
            finished: new Value(0),
            position: new Value(position),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const config = {
            duration: new Value(duration),
            toValue: new Value(toValue),
            easing: Easing.inOut(Easing.circle),
        }
        try {
            return block([
                startClock(clock),
                timing(clock, state, config),
                cond(state.finished, [
                    stopClock(clock),
                    set(state.time, 0),
                    set(state.frameTime, 0),
                    set(state.finished, 0),
                ]),
                state.position,
            ]);
        } catch {
            return block([
                state.position,
            ]);
        }
    }

    getBounce = (duration: number, toValue: number, delay: number = 0) => {
        const { set, startClock, stopClock, timing, cond, block, Value, Clock, eq} = Animated;
        const clock = new Clock();
        const delayClock = new Clock();
        const back = new Value(0);
        const stateDelay =  {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const configDelay = {
            duration: new Value(delay),
            toValue: new Value(0),
            easing: Easing.inOut(Easing.circle),
        }

        const state =  {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const config = {
            duration: new Value(Math.floor(duration/2)),
            toValue: new Value(toValue),
            easing: Easing.inOut(Easing.circle),
        }
        try {
            return block([
                startClock(delayClock),
                timing(delayClock, stateDelay, configDelay),
                cond(stateDelay.finished, [
                    startClock(clock),
                    timing(clock, state, config),
                ]),
                cond(state.finished, [
                    stopClock(clock),
                    cond(eq(back, 0),
                        [   set(state.time, 0),
                            set(state.frameTime, 0),
                            set(state.finished, 0),
                            set(config.toValue, 0),
                            set(back, 1),
                            startClock(clock)
                        ], 
                        ),
                ]),
                state.position,
            ]);
        } catch {
            return block([
                state.position,
            ]);
        }
    }

    getColorChange = (duration: number, toValue: string[]) => {
        const validator = Validation;
        toValue.forEach((color) => {
            if(!validator.isHexColor(color)) {
                return color;
            }
        });
        const { set, interpolate, startClock, stopClock, timing, cond, block, Value, Clock, eq} = Animated;
        const animatedValue = new ReactAnimated.Value(0);
        const _animateColor = () => {
            ReactAnimated.timing(
                animatedValue,
                {
                    toValue: 100,
                    duration: duration
                }
            ).start(() => { _animateColor() });
        }
        const getInputRange = () => {
            const range: number[] = [];
            range.push(0);
            for(let i = 1; i < toValue.length; i++) {
                if(i === toValue.length - 1) {
                    range.push(100);
                } else {
                    const interval = Math.floor(100 / (toValue.length - 1));
                    range.push(interval * i); 
                }
            }
            return range;
        }

        const getOutputRange = () => {
            const range: string[] = [];
            for(let i = 0; i < toValue.length; i++) {
                const rgb = this._hexToRGB(toValue[i]);
            }
        }

        const animatedConfig = {
            inputRange: getInputRange(),
            outputRange: toValue
        };
        return  animatedValue.interpolate(animatedConfig);
    }

    _runClock = (duration: number, toValue: number) => {
        const { set, startClock, stopClock, timing, cond, block, Value, Clock, eq} = Animated;
        const clock = new Clock();
        const state =  {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const config = {
            duration: new Value(duration),
            toValue: new Value(toValue),
            easing: Easing.inOut(Easing.linear),
        }
        try {
            return block([
                startClock(clock),
                timing(clock, state, config),
                cond(state.finished, [
                    stopClock(clock),
                    set(state.time, 0),
                    set(state.frameTime, 0),
                    set(state.finished, 0),
                ]),
                state.position,
            ]);
        } catch {
            return block([
                state.position,
            ]);
        }
    }

    runOpacityTimer = (duration: number, gestureState) => {
        const { set, startClock, stopClock, timing, cond, block, Value, Clock, eq} = Animated;
        const state = {
          finished: new Value(0),
          position: new Value(0),
          time: new Value(0),
          frameTime: new Value(0),
        };
        const config = {
          duration: duration,
          toValue: new Value(-1),
          easing: Easing.inOut(Easing.ease),
        };
      };
      

    _hexToRGB(hex, alpha = null) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    
    getRotateBackandForth = (duration: number, rotationDegree: number) => {
        const rotate = Math.floor(rotationDegree/2);
        const {add, set, startClock, stopClock, timing, cond, block, Value, Clock, eq} = Animated;
        const rotateRight = new Value(0);
        const clock = new Clock();
        const state =  {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const config = {
            duration: new Value(duration),
            toValue: new Value(rotate),
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
                    set(config.toValue, -(rotate*2))
                ]),
                cond(eq(rotateRight, 2), [
                    set(config.toValue, (rotate * 2))
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


    _runClockBounceToZero = (duration: number, toValue: number, gestureState?: any) => {
        const {or,lessOrEq ,and, not ,add, set, startClock, stopClock, timing, cond, block, Value, Clock, eq} = Animated;
        const visable = new Value(0);
        const clock = new Clock();
        const state =  {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        }

        const config = {
            duration: new Value(Math.floor(duration/3)),
            toValue: new Value(toValue),
            easing: Easing.inOut(Easing.circle),
        }

        try {
            return block([
                cond(eq(gestureState, State.BEGAN) , [
                    startClock(clock),
                  ],
                  [
                      set(state.position, 0)
                  ]),
                timing(clock, state, config),
                cond(state.finished, [
                    stopClock(clock),
                    set(visable, add(visable, 1)),
                    set(state.time, 0),
                    set(state.frameTime, 0),
                ]),
                cond(eq(visable, 1), [
                    set(config.toValue, 0)
                ]),
                cond(and(state.finished, lessOrEq(visable, 1)), [
                    set(state.finished, 0),
                    startClock(clock),
                ]),
                cond(and(state.finished, eq(visable, 2 )), [
                    stopClock(clock),
                    set(state.time, 0),
                    set(state.frameTime, 0),
                    set(visable, 0),
                    set(state.finished, 0),
                    set(config.toValue, toValue)
                  ],),
                state.position,
            ]);
        } catch {
            return block([
                state.position,
            ]);
        }  
    }

    getOpacityBounce =  (duration: number, hexColor: string,  gestureState?: any ) => {
        const {color} = Animated;
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        const value = this._runClockBounceToZero(duration, 10, gestureState);
        const config = {
            inputRange: [0, 10],
            outputRange: [0.0, 1.0]
        };
        const a = Animated.interpolate(value, config);
        return color(r, g, b, a);
    }
}

export default Animation;