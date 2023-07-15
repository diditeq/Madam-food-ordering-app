import React from 'react';
import {TouchableOpacity, Image, Text, View } from 'react-native';
import image from '../../constants/image';

import {images, FONTS, SIZES, COLORS } from '../../constants';

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) =>{
    return (
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
          <Image
            source={icon}
            style={{
                width: 30,
                height: 30,
                ...iconStyle
            }}
          />
        </TouchableOpacity>
      )
}
   

export default IconButton 