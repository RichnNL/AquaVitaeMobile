import React from 'react';
import {IThemeStore} from '../stores/Theme/ThemeStore';

const ThemeContext = React.createContext<IThemeStore | null>(null);
export default ThemeContext;