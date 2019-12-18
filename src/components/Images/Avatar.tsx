import React, { useState } from 'react';
import AvatarSocial from 'react-native-avatar-social';
import VariantType from '../../types/style/Variant';
import colors from '../../styles/theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import Validation from '../../util/Validation';

type Props = VariantType & {
  size: number,
  source: string,
  name?: string,
  onPress?: ()=> any
}


const  Avatar: React.FC<Props> = (props) => { 
    const color = props.variant === 'primary' ? colors.Colors.secondary.default : colors.Colors.primary.default;
    const type = Validation.imageValid(props.source) ? 'image' : 'letter';
    const name = props.name ? props.name : '?';
    const circleSize = props.size +  (Math.ceil(props.size*0.03));
    const avatarSize = props.size;
    return (
        <TouchableOpacity   onPress={props.onPress}>
            <AvatarSocial
                    dim={avatarSize}
                    image={{uri: props.source}}
                    name={name}
                    type={type}
                    isStatus={false}
                    isIcon={false}
                    /> 
        </TouchableOpacity>
    )
}
  

  Avatar.defaultProps = {
    variant: 'primary',
  };

export default Avatar
