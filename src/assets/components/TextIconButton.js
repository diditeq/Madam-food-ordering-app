import React from "react";
import {
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from "react-native";

import { FONTS, COLORS } from "../../constants";

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "center",
                ...containerStyle
            }}
            onPress={onPress}
        >

            {iconPosition == "CENTER" &&
                <Image
                    source={icon}
                    style={{
                        ...style.image,
                        ...iconStyle
                    }}
                />
            }
        </TouchableOpacity>
    )
}

const style = StyleSheet.create ({
    image: {
        width: 25,
        height: 30,
    }
})

export default TextIconButton;