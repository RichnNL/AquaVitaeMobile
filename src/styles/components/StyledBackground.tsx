import * as Theme from '../theme/theme';
import VariantType from '../../types/style/Variant';
import {useThemeStore} from '../../state/stores/Theme/index';
import {StyledViewType} from './StyledView';
import { useObserver } from 'mobx-react';
import {Colors} from '../theme/colors';
import { useState, useEffect, Fragment } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components/native';

export type StyledBackgroundType = Theme.ThemeType & VariantType & {
    vertical?: boolean
}

export type Props = {
    source: any
}
export const StyledView = styledComponents.View`
    flex: 1;
    flexDirection: column;
    alignItems: stretch;
    alignContent: center;	
`;

export const StyledBackground = styledComponents.ImageBackground`
    width: 100%;
    height: 100%;
    alignItems: center;
    justifyContent: center;
`;

export const StyledImageBackground: React.FC<Props> = (props) => { 
    return (
              <StyledView>
                    <StyledBackground source={props.source}>
                        {props.children}
                    </StyledBackground>
              </StyledView> 
            )
    }
// export const  StyledBackground: React.FC<StyledBackgroundType> = (props) => { 
//     const theme = useThemeStore().theme;
//    const start = {x: 0, y: 0};
//    const end = props.vertical  ? {x: 0, y: 1} : {x: 1, y: 0};
//    // diagonal const end = {x: 1, y: 1};
//    var styles = StyleSheet.create({
//     linearGradient: {
//       flex: 1,
//       flexDirection: 'column',
//       alignItems: 'stretch',
//        alignContent: 'center',
//     },
//   });

// const [colors, setColors] = useState<string[]>(['','','']);
//     useEffect(()=> {
//         if(theme === 'light') {
//             if(props.variant === 'primary' ){
//                 setColors([Colors.secondary.light ,Colors.primary.default, Colors.secondary.light]);
//             } else {
//                 setColors([Colors.primary.default, Colors.secondary.light, Colors.primary.default]);
//             }
//         } else {
//             if(props.variant === 'primary' ){
//                 setColors([Colors.secondary.dark ,Colors.primary.default, Colors.secondary.dark ]);
//             } else {
//                 setColors([Colors.secondary.default ,Colors.primary.dark, Colors.secondary.default ]);
//             }
//         }
//     }, [theme]);    
//     return useObserver(() => {
//         return (
//             <LinearGradient  colors={['blue', 'green']} style={styles.linearGradient}>

//             </LinearGradient>
//             )
//       });
//     }
    
//     StyledBackground.defaultProps = {
//         variant: 'primary',
//         vertical: true
//       };
    




    
    
 
    