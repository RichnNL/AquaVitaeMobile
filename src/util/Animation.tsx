import Animated, { Easing } from "react-native-reanimated";

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
}

export default Animation;