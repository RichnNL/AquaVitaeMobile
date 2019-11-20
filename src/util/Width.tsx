import { Dimensions} from 'react-native';
const width = (percentOfWindow: number)=> {
    const percent = 1 - (percentOfWindow/100);
    return Math.floor(Dimensions.get('window').width - (Dimensions.get('window').width * percent));
} 

export default width;