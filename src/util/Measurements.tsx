import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('screen');


const scale = SCREEN_WIDTH / 320;

export const normalizeText = (size: number) => {
    if(size < 1 && size > 100) {
        return 0;
    }
    const newSize = size * scale; 

    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const percentWidth = (percentOfWindow: number) => {
    const percent = 1 - (percentOfWindow/100);
    return Math.floor(SCREEN_WIDTH - (SCREEN_WIDTH * percent));
} 

export const percentHeight = (percentOfWindow: number) => {
    const percent = 1 - (percentOfWindow/100);
    return Math.floor(SCREEN_HEIGHT - (SCREEN_HEIGHT * percent));
} 




