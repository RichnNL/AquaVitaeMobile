import React, { useState, Fragment, useEffect } from 'react';
import {useThemeStore} from '../state/stores/Theme/index';
import {StyledViewType} from './StyledView';
import { StatusBar } from 'react-native';
import { useObserver } from 'mobx-react';
import {Colors} from './theme/colors';

type Props  = StyledViewType & {
   
}


const  StyledStatusBar: React.FC<Props> = (props) => { 
const theme = useThemeStore().theme;
const [barBackgroundColor, setBackgroundColor] = useState('');
const [barStyleColor, setBarStyleColor] = useState<'default' | 'light-content' | 'dark-content'>('dark-content');
useEffect(()=> {
    if(theme === 'light') {
        setBarStyleColor('dark-content');
        if(props.variant === 'primary' ){
            setBackgroundColor(Colors.primary.default);
        } else {
            setBackgroundColor(Colors.secondary.light);
        }
    } else {
        setBarStyleColor('light-content');
        if(props.variant === 'primary' ){
            setBackgroundColor(Colors.primary.dark);
        } else {
            setBackgroundColor(Colors.secondary.dark);
        }
    }
}, [theme]);    
return useObserver(() => {
    return (
            <StatusBar  backgroundColor={barBackgroundColor} barStyle={barStyleColor} />
            )
  });
}

StyledStatusBar.defaultProps = {
    variant: 'primary',
  };

  export default StyledStatusBar;