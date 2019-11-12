import React from 'react';
import {ILanguageStore} from '../stores/Language/LanguageStore';

const LanguageContext = React.createContext<ILanguageStore | null> (null);
export default LanguageContext;