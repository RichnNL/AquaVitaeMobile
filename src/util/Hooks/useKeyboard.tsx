import { useEffect} from "react";
import { Keyboard } from "react-native";

const useKeyboard = (onKeyboardShow, onKeyboardHide) => {
    useEffect(() => {
      Keyboard.addListener('keyboardDidShow', onKeyboardShow);
      Keyboard.addListener('keyboardDidHide', onKeyboardHide);
      return ()=> { 
        Keyboard.removeListener('keyboardDidShow', onKeyboardShow);
        Keyboard.removeListener('keyboardDidHide', onKeyboardHide);
      }
    }, [onKeyboardShow, onKeyboardHide]);
  }
  export default useKeyboard;