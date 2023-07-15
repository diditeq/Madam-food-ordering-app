import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { FONTS, COLORS } from "../../constants";

const Button = ({ title, isLoading, onPress, titleStyle, buttonContainerStyle }) => {
  return (
    <TouchableOpacity 
     style={{alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: COLORS.green,
     ...buttonContainerStyle
    }}
     onPress={onPress}
     disabled={isLoading}
     >
     {isLoading ? (
        <ActivityIndicator color="#ffffff" size="large" />
      ) : (
        <Text 
        style={{
            color: COLORS.green,
            fontSize: 16,
            ...titleStyle}}
        >{title}</Text>
      )}
    </TouchableOpacity>
  );
};



export default Button;
