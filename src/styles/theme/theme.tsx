import theme from "styled-theming";
import {Colors} from './colors';
import * as React from 'react';



export const backgroundColor = theme.variants('theme', 'variant', {
    primary: {light: Colors.primary.default, dark: Colors.primary.dark },
    secondary: {light: Colors.light.light,  dark: Colors.secondary.dark }
  });

export const statusBarContent = theme('theme', {
  light: 'dark-content',
  dark: 'light-content'
})

export const backgroundColorHover = theme.variants('theme', 'variant', {
    primary: {light: Colors.secondary.default, dark: Colors.primary.dark },
    secondary: {light: Colors.primary.dark, dark: Colors.primary.dark }
  });
  
export const backgroundColorshadow = theme.variants('theme', 'variant', {
  primary: {light: Colors.secondary.light, dark: Colors.primary.dark },
  secondary: {light: Colors.primary.dark, dark: Colors.primary.dark }
});

export const borderColor = theme.variants('theme', 'variant', {
  primary: {light: Colors.primary.default, dark: Colors.primary.dark },
  secondary: {light: Colors.primary.light, dark: Colors.primary.dark }
});
  
export const textColor = theme.variants('theme', 'variant', {
  primary: {light: Colors.text.default, dark: Colors.text.dark },
  secondary: {light: Colors.text.light, dark: Colors.text.dark }
});

export const textColorAccent = theme.variants('theme', 'variant', {
  primary: {light: Colors.text.default, dark: Colors.text.dark },
  secondary: {light: Colors.text.light, dark: Colors.text.dark }
});

export const textColorSubtle = theme.variants('theme', 'variant', {
  primary: {light: Colors.text.default, dark: Colors.text.dark },
  secondary: {light: Colors.text.light, dark: Colors.text.dark }
});

export const headerFont = theme.variants('theme', 'variant', {
  primary: {light: 'Celtic', dark: 'Celtic'  },
  secondary: {light: 'Celtic', dark: 'Celtic' }
});

export const textFont = theme.variants('theme', 'variant', {
  primary: {light: 'OpenSans', dark: 'OpenSans' },
  secondary: {light: 'OpenSans', dark: 'OpenSans' }
});

export const textItalicFont = theme.variants('theme', 'variant', {
  primary: {light: 'OpenSans-Italic', dark: 'OpenSans-Italic' },
  secondary: {light: 'OpenSans-Italic', dark: 'OpenSans-Italic' }
});

export const textBoldFont = theme.variants('theme', 'variant', {
  primary: {light: 'OpenSans-Bold', dark: 'OpenSans-Bold' },
  secondary: {light: 'OpenSans-Bold', dark: 'OpenSans-Bold' }
});

export const textLightFont = theme.variants('theme', 'variant', {
  primary: {light: 'OpenSans-Light', dark: 'OpenSans-Light' },
  secondary: {light: 'OpenSans-Light', dark: 'OpenSans-Light' }
});

export const buttonFontSize = theme.variants('layout', 'btnSize', {
  small: { compact: '10px', cozy: '15px' },
  medium: { compact: '20px', cozy: '25px' },
  large: { compact: '30px', cozy: '35px' },
});

export const socialButtonColor = theme.variants('theme', 'social', {
  google: {light: Colors.google.light, dark: Colors.google.dark },
  facebook: {light: Colors.facebook.default, dark: Colors.facebook.default }
});

export const socialButtonTextColor = theme.variants('theme', 'social', {
  google: {light: Colors.text.default, dark: Colors.google.light },
  facebook: {light: Colors.facebook.light, dark: Colors.facebook.light }
});

export const socialFontFamily = theme.variants('theme', 'social', {
  google: {light: 'Roboto-Medium', dark: 'Roboto-Medium' },
  facebook: {light: 'OpenSans', dark: 'OpenSans' }
});


export type ThemeType = {
 children?: React.ReactNode | any; 
}






 