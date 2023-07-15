import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS, icons } from '../../constants';

const RightArrow = ({
    rightArrow,
    iconStyle,
  //  activeColor = COLORS.primary,
  //  inactiveColor = COLORS.primary
}) => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}   
        >
            <Image
                source={icons.rightArrow}
                style={{
                    tintColor: COLORS.primary,
                    ...iconStyle
                }}
            />

        </View>
    )
}

const styles =StyleSheet.create({
    rightArrowIcon:{
        height: 15,
        width: 10
    }
})

export default RightArrow;