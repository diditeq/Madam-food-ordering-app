import React from "react";
import { View, Text} from 'react-native';
import {IconButton, TextButton} from "../assets/components";
import { FONTS, SIZES, COLORS, icons } from '.';

const StepperInput = ({ value = 1, onAdd, onMinus, }) => {
    return (
        <View
        style={{
            flexDirection: 'row',
            justifyContent:"space-between",
            width: 90
        }}
    >
        <IconButton 
        containerStyle= {{
            aligItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            borderRadius: 20
        }}
        icon={icons.onMinus}
        iconStyle={{
            height: 25,
            width: 25,
        }}
        onPress={onMinus}
    />

        <View
    >
        <TextButton
                    label={value} 
                    buttonContainerStyle={{
                      backgroundColor: COLORS.primary,
                      height: 25,
                      width: 25,
                      borderRadius: 5,
                      aligItems: 'center',
                      justifyContent: 'center'
                    }}
                    labelStyle={{
                      color: COLORS.white,
                      fontSize: 15,
                      fontWeight:"300"
                    }}
                    />
      
        </View>

        <IconButton 
        containerStyle= {{
            aligItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            borderRadius: 20
        }}
        icon={icons.onAdd}
        iconStyle={{
            height: 25,
            width: 25,
        }}
        onPress={onAdd}
    />

        </View>
    )
}

export default StepperInput;