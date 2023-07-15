import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet} from 'react-native';
import { FONTS, COLORS } from "../../constants";

const TextButton = ({ buttonContainerStyle, disabled, label, labelStyle, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.green,
                ...buttonContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.green,
                    ...FONTS.body4,
                    ...labelStyle
                }}
                onPress={onPress}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;