import React from "react-native";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const CustomSwitch = ({ value, onChange }) => {
    return(
        <TouchableWithoutFeedback
            onPress={() => onChange(!value)}
        >
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                {/* Switch */}
                <View
                    style={value ? styles.switchOnContainer: styles.switchOffContainer}
                >
                    <View
                        style={{
                            ...styles.dot,
                            backgroundColor: value ? COLORS.white : COLORS.gray
                        }}
                    />
                </View>


                 {/* Text */}
                 <Text
                    style={{
                        color: value ? COLORS.primary : COLORS.gray,
                        marginLeft: SIZES.base,
                        ...SIZES.h3
                    }}
                 >
                    Save

                 </Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight:2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius:10,
        backgroundColor: COLORS.primary
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 2,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10
    },
    dot:{
        width:12,
        height:12,
        borderRadius: 6
    }

})

export default CustomSwitch;

