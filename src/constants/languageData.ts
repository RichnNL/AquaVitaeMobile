import RULES from './rules';

export const LanguageData: LanguageOptionsType = {
    'en-US': {
        test: {
            test: 'Hello World'
        },
        registration: {
            screenName: 'Screen Name',
            error: {
                mustBeginWithLetters: 'The first ' + RULES.screenNameMinLength + 'characters must be letters',
                screenNameIncorrectLength: 'Name must be between ' + RULES.screenNameMinLength + ' and ' + RULES.screenNameMaxLength + ' characters',
                containsSpecialCharacters: 'Must not contains special characters'
            },
            available: 'Available',
            unavailable: 'Unavailable'
        }
    },
    'es-ES': {
        test: {
            test: 'Hola Mundo'
        },
        registration: {
            screenName: 'Nombre de pantalla',
            error: {
                mustBeginWithLetters: 'El primero ' + RULES.screenNameMinLength + 'las letras deben ser letras',
                screenNameIncorrectLength: 'El nombre debe estar entre ' + RULES.screenNameMinLength + ' y ' + RULES.screenNameMaxLength + ' caracteres',
                containsSpecialCharacters: 'No debe contener caracteres especiales.'
            },
            available: 'Disponible',
            unavailable: 'Indisponible'
        }
    },
    'nl-NL': {
        test: {
            test: 'Hallo Werld'
        },
        registration: {
            screenName: 'Scherm Naam',
            error: {
                mustBeginWithLetters: 'De eerste ' + RULES.screenNameMinLength + 'tekens moeten letters zijn',
                screenNameIncorrectLength: 'Naam moet tussen staan ' + RULES.screenNameMinLength + ' en ' + RULES.screenNameMaxLength + ' de karakters',
                containsSpecialCharacters: 'Mag geen speciale tekens bevatten'
            },
            available: 'Beschikbaar',
            unavailable: 'Niet beschikbaar'
        }
    }
}

export type LanguageDataType = {
    test: {
        test: string;
    }
    registration: {
        screenName: string;
        error: RegisterErrorType;
        available: string;
        unavailable: string;
    }
}

export type RegisterErrorType = {
    mustBeginWithLetters: string;
    screenNameIncorrectLength: string; 
    containsSpecialCharacters: string;
};



export type LanguageOptionsType = {
    'en-US': LanguageDataType,
    'es-ES': LanguageDataType,
    'nl-NL': LanguageDataType
}






export type SuppportedLanguagesIntialsType = englishInitial | espanolInitial  | nederlandsInitial;
export type SuppportedLanguagesFullNameType = english | espanol | nederlands; 


export type LanguageType = {
    initial: SuppportedLanguagesIntialsType;
    full: SuppportedLanguagesFullNameType;
}

type englishInitial =  'en-US';
type espanolInitial =  'es-ES';
type nederlandsInitial = 'nl-NL';
type english = 'english';
type espanol = 'espanol';
type nederlands = 'nederlands';

const englishLang: LanguageType = {
    initial: 'en-US',
    full: 'english'
}
const espanolLang: LanguageType = {
    initial: 'es-ES',
    full: 'espanol'
}

const nederlandsLang: LanguageType = {
    initial: 'nl-NL',
    full: 'nederlands'    
}

export const SuppportedLanguages: LanguageType[] = [englishLang, espanolLang, nederlandsLang];