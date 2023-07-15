import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import {SIZES, FONTS,} from "../../constants";

const Header = ({ title, subtitle, containerStyle, titleStyle, leftComponent, rightComponent, navigation }) => {
    return(
        <View
            style={{
                height: 60,
                flexDirection: "row",
                ...containerStyle
            }}
        >
            {
                leftComponent
            }
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                
            }}
        >
            <Text style={{ ...FONTS.h3, ...titleStyle }}>{title}</Text>
            <Text style={{ ...SIZES.font, ...titleStyle }}>{subtitle}</Text>
        </View>
        {
            rightComponent
        }
        </View>

          )
}




export default Header;