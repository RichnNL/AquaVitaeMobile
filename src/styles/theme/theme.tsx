import theme from "styled-theming";
import {Colors} from './colors';
import * as React from 'react';



export const backgroundColor = theme.variants('theme', 'type', {
    primary: {light: Colors.primary.default, dark: Colors.primary.dark },
    secondary: {light: Colors.primary.light,  dark: Colors.secondary.dark }
  });

export const statusBarContent = theme('theme', {
  light: 'dark-content',
  dark: 'light-content'
})

export const backgroundColorHover = theme.variants('theme', 'type', {
    primary: {light: Colors.secondary.default, dark: Colors.primary.dark },
    secondary: {light: Colors.primary.dark, dark: Colors.primary.dark }
  });
  
export const backgroundColorshadow = theme.variants('theme', 'type', {
  primary: {light: Colors.secondary.light, dark: Colors.primary.dark },
  secondary: {light: Colors.primary.dark, dark: Colors.primary.dark }
});

export const borderColor = theme.variants('theme', 'type', {
  primary: {light: Colors.secondary.default, dark: Colors.primary.dark },
  secondary: {light: Colors.primary.light, dark: Colors.primary.dark }
});
  
export const textColor = theme.variants('theme', 'type', {
  primary: {light: Colors.text.default, dark: Colors.text.dark },
  secondary: {light: Colors.text.light, dark: Colors.text.dark }
});

export const headerFont = theme.variants('theme', 'type', {
  primary: {light: 'Celtic', dark: 'Celtic'  },
  secondary: {light: 'Celtic', dark: 'Celtic' }
});

export const textFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans', dark: 'OpenSans' },
  secondary: {light: 'OpenSans', dark: 'OpenSans' }
});

export const textItalicFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans_Italic', dark: 'OpenSans_Italic' },
  secondary: {light: 'OpenSans_Italic', dark: 'OpenSans_Italic' }
});

export const textBoldFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans_Bold', dark: 'OpenSans_Bold' },
  secondary: {light: 'OpenSans_Bold', dark: 'OpenSans_Bold' }
});

export const textLightFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans_Light', dark: 'OpenSans_Light' },
  secondary: {light: 'OpenSans_Light', dark: 'OpenSans_Light' }
});

export const buttonFontSize = theme.variants('layout', 'btnSize', {
  small: { compact: '10px', cozy: '15px' },
  medium: { compact: '20px', cozy: '25px' },
  large: { compact: '30px', cozy: '35px' },
});

export type ThemeType = {
 children?: React.ReactNode | any; 
}






 