
export const LanguageData: LanguageOptionsType = {
    'en-US': {
        test: {
            test: 'Hello World'
        }
    },
    'es-ES': {
        test: {
            test: 'Hola Mundo'
        }
    },
    'nl-NL': {
        test: {
            test: 'Hallo Werld'
        }
    }
}

export type LanguageDataType = {
    test: {
        test: string;
    }
}



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