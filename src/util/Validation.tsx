import RULES from '../constants/rules';
import ERRORCODE from '../constants/errorCode';

interface IValidation {
    screenNameValid: (name: string) => number;
    mottoValid: (text: string) => number;
}

class Validation implements IValidation {
    screenNameValid = (name: string)=> {
    let result = 1;
    result = this._screenNameLength(name, result);
    result = this._screenNameBeginWithLetters(name, result);
    result = this._screenNameContainsSpecialCharacters(name, result);
    return result;
}

_screenNameLength = (name: string, result = 1) => {
    if(name.length > RULES.screenNameMaxLength || name.length < RULES.screenNameMinLength  ) {
        result = ERRORCODE.register.screenNameLength.code;
    } 
    return result;
}

_screenNameBeginWithLetters = (name: string, result = 1) => {
    name = name.slice(0, RULES.screenNameMinLength);
    const validator = new RegExp(/^[a-zA-Z]+$/);
    if(!validator.test(name)) {
        result = ERRORCODE.register.screenNameBeginSytax.code;
    } 
    return result;
}

_screenNameContainsSpecialCharacters = (name: string, result = 1) => {
    const validator = new RegExp(/^[\w]+$/);
    if(!validator.test(name)) {
        result = ERRORCODE.register.screenNameContainsSpeicalChars.code;
    } 
    return result;
}



    mottoValid = (text: string) => {
        let result = 1;
        result = this._mottoLength(text, result);
        result = this._mottoContainsSpecialCharacters(text, result);
        return result;
    }

    _mottoLength = (name: string, result = 1) => {
        if(name.length > RULES.mottoMaxLength || name.length < RULES.mottoMinLength  ) {
            result = ERRORCODE.register.mottoLength.code;
        } 
        return result;
    }

    _mottoContainsSpecialCharacters = (name: string, result = 1) => {
        if(name.length === 0){
            return result;
        }
        const validator = new RegExp(/^[\w\s]+$/);
        if(!validator.test(name)) {
            result = ERRORCODE.register.mottoHasSpecialChars.code;
        } 
        return result;
    }

    containsOnlyLetters = (text: string) => {
        if(text === '') {
            return true;
        }
        const validator = new RegExp(/^[a-zA-Z\s]+$/);
        return validator.test(text);
    }

    imageValid = async(url: string) => {
        try {
            if(url && url.length > 5) {
                const res = await fetch(url);
                return res.ok;
            } else {
                return false;
            }
            

        }
        catch {
            return false;
        }
    }

    isHexColor(hex: string) {
        const validator = new RegExp(/^#([A-Fa-f0-9]{3}){1,2}$/);
        return validator.test(hex);
    }
}

export default new Validation;