export interface IColorsInterface {
    default: string;
    light: string;
    dark: string;
    
}

export interface IColorOptionsInterface {
    primary: IColorsInterface;
    secondary: IColorsInterface;
    text: IColorsInterface;
    accent: IColorsInterface;
    light: IColorsInterface;
    dark: IColorsInterface;
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
        default: '#554bc6',
        light: '#867fd6',
        dark: '#3e35a6'
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
    }
};

export default {Colors};

   
  
    



