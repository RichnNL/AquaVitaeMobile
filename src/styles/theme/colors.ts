export interface IColorsInterface {
    default: string;
    light: string;
    dark: string;
    
}

export interface ICountries {
    scotland: string;
    ireland: string;
    america: string;
    japan: string;
    canada: string;
}

export interface IColorOptionsInterface {
    primary: IColorsInterface;
    secondary: IColorsInterface;
    text: IColorsInterface;
    accent: IColorsInterface;
    light: IColorsInterface;
    dark: IColorsInterface;
    google: IColorsInterface;
    facebook: IColorsInterface;
    countries: ICountries;
}

export const Colors: IColorOptionsInterface =  {
    primary: {
        default: '#2274A5',
        light: '#2a91ce',
        dark: '#124e78'
    },
    secondary: {
        default: '#e38200',
        light: '#ff9e1d',
        dark: '#b66800'
    },
    text: {
        default: '#1d3a50',
        light: '#dee6f0',
        dark: '#11181e'
    },
    accent: { 
        default: '#507d4a',
        light: '#008080',
        dark: '#9f1d35'
    },
    light: {
        default: '#e9edf6',
        light: '#ffffff',
        dark: '#f0f0f0'
    },
    dark: {
        default: '#95989b',
        light: '#bcbec0',
        dark: '#767a7d'
    },
    google: {
        default: '#FFFFFF',
        light: '#FFFFFF',
        dark: '#4285F4'
    },
    facebook: {
        default: '#3b5998',
        light: '#f7f7f7',
        dark: '#8b9dc3'
    },
    countries: {
        scotland: '#0065BF',
        ireland: '#169b62',
        america: '#3c3b6e',
        japan: '#bc002d',
        canada: ' #ff0000',
    }
};

export default {Colors};

   
  
    



