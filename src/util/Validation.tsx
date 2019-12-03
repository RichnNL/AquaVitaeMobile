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
        const expressionLength = '/^[.]{' + RULES.mottoMinLength + 
        ',' + RULES.mottoMaxLength + '}$/';
        const validator = new RegExp(expressionLength);
        if(!validator.test(name)) {
            result = ERRORCODE.register.mottoLength.code;
        } 
        return result;
    }

    _mottoContainsSpecialCharacters = (name: string, result = 1) => {
        const validator = new RegExp(/^[\w\s]+$/);
        if(!validator.test(name)) {
            result = ERRORCODE.register.mottoHasSpecialChars.code;
        } 
        return result;
    }
}

export default new Validation;