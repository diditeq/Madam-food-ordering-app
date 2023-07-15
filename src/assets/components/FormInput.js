import React from "react";
import { 
    View,
    Text,
    TextInput
} from "react-native";

import {FONTS, SIZES, COLORS} from "../../constants";


const FormInput =({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    securityTextEntry,
    keyboardType = "default",
    autoCompleteType = "on",
    autoCapitalize = "none",
    errorMsg = ""
})  => {
    return (
        <View style={{ ...containerStyle}}>
            {/* Label & Error msg */}
            <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.body4}}>
                {label} </Text>
                <Text style={{ color: 'red', ...FONTS.body4}}>
                {errorMsg}</Text>

            </View>
            {/* Text input */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.gray,
                    backgroundColor: COLORS.white
                }}
            >
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={securityTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />

                {appendComponent}
            </View>
        </View>
        
    )
}

export default FormInput;