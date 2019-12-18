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
                containsSpecialCharacters: 'Must not contains special characters',
                mottoTooLong: 'Must be less than ' + RULES.mottoMaxLength + ' characters',
                mottoContainsSpecialCharacters: 'Must not contain special characters'
            },
            available: 'Available',
            unavailable: 'Unavailable',
            useCurrentLocation: 'Use Current Location',
            country: 'Pick Country',
            register: 'Register',
            welcome: 'Welcome to Aqua Vitate, please create a screen name and location',
            motto: 'Motto',
            city: 'City',
            mottoExample: 'Example: Never cry over spilt milk. It could’ve been whiskey.',
            pickHighestDrinkingCountries: 'My country drinks the most whisky',
            optional: 'Optional',
            submit: 'Sign Up'
        },
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
                containsSpecialCharacters: 'No debe contener caracteres especiales.',
                mottoTooLong: 'Debe ser menor que ' + RULES.mottoMaxLength,
                mottoContainsSpecialCharacters: 'No debe contener caracteres especiales.'
            },
            available: 'Disponible',
            unavailable: 'Indisponible',
            useCurrentLocation: 'Usar ubicación actual',
            country: 'Elige tu País',
            register: 'Apuntar',
            welcome: 'Bienvenido a Aqua Vitate, cree un nombre de pantalla y ubicación',
            motto: 'Lema',
            city: 'Ciudad',
            mottoExample: 'Ejemplo: Nunca llores por la leche derramada. Pudo haber sido whisky.',
            pickHighestDrinkingCountries: 'Mi país bebe más whisky',
            optional: 'De Opción',
            submit: 'Regístrate'
        },
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
                containsSpecialCharacters: 'Mag geen speciale tekens bevatten',
                mottoTooLong: 'Moet minder zijn dan ' + RULES.mottoMaxLength,
                mottoContainsSpecialCharacters: 'Mag geen speciale tekens bevatten'
            },
            available: 'Beschikbaar',
            unavailable: 'Niet beschikbaar',
            useCurrentLocation: 'Gebruik huidige locatie',
            country: 'Kies Uw Land',
            register: 'Registreren',
            welcome: 'Welkom bij Aqua Vitate, maak een schermnaam en locatie',
            motto: 'Slogan',
            city: 'Staad',
            mottoExample: 'Bijvoorbeeld: Nooit huilen om gemorste melk. Het had whisky kunnen zijn.',
            pickHighestDrinkingCountries: 'Mijn land drinkt de meeste whisky',
            optional: 'Onverplicht',
            submit: 'Inschrijven'
        },
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
        useCurrentLocation: string;
        country: string;
        register: string;
        welcome: string;
        motto: string;
        city: string;
        mottoExample: string;
        pickHighestDrinkingCountries: string;
        optional: string;
        submit: string;
    },
}

export type RegisterErrorType = {
    mustBeginWithLetters: string;
    screenNameIncorrectLength: string; 
    containsSpecialCharacters: string;
    mottoTooLong: string;
    mottoContainsSpecialCharacters: string;
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