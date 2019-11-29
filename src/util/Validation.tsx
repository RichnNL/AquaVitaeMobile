import RULES from '../constants/rules';
import ERRORCODE from '../constants/errorCode';
export type validateType = string | true; 
export const screenNameValid = (name: string)=> {
    let result = 1;
    result = screenNameLength(name, result);
    result = screenNameBeginWithLetters(name, result);
    result = screenNameContainsSpecialCharacters(name, result);
    return result;
}

const screenNameLength = (name: string, result = 1) => {
    const expressionLength = '/^[.]{' + RULES.screenNameMinLength + 
    ',' + RULES.screenNameMaxLength + '}$/';
    const validator = new RegExp(expressionLength);
    if(!validator.test(name)) {
        result = ERRORCODE.register.screenNameLength.code;
    } 
    return result;
}

const screenNameBeginWithLetters = (name: string, result = 1) => {
    const expression = '/^[a-zA-Z]{' + RULES.screenNameMinLength + 
    ',' + '}$/';
    const validator = new RegExp(expression);
    if(!validator.test(name)) {
        result = ERRORCODE.register.screenNameBeginSytax.code;
    } 
    return result;
}

const screenNameContainsSpecialCharacters = (name: string, result = 1) => {
    const validator = new RegExp(/^[\w]+$/);
    if(!validator.test(name)) {
        result = ERRORCODE.register.screenNameContainsSpeicalChars.code;
    } 
    return result;
}



export const mottoValid = (text: string) => {
    let result = 1;
    result = mottoLength(text, result);
    result = mottoContainsSpecialCharacters(text, result);
    return result;
}

const mottoLength = (name: string, result = 1) => {
    const expressionLength = '/^[.]{' + RULES.mottoMinLength + 
    ',' + RULES.mottoMaxLength + '}$/';
    const validator = new RegExp(expressionLength);
    if(!validator.test(name)) {
        result = ERRORCODE.register.mottoLength.code;
    } 
    return result;
}

const mottoContainsSpecialCharacters = (name: string, result = 1) => {
    const validator = new RegExp(/^[\w\s]+$/);
    if(!validator.test(name)) {
        result = ERRORCODE.register.mottoHasSpecialChars.code;
    } 
    return result;
}