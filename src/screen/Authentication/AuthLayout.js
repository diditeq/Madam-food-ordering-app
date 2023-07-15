import React from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {images, FONTS, SIZES, COLORS } from '../../constants';

const AuthLayout = ({ title, subtitle, titleContainerStyle, children}) =>{
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.base,
                backgroundColor: COLORS.white
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
            {/* App Icon */}
            <View
                style={{
                    alignItems: "center",
                    marginTop: 20
                }}
            >
                <Image
                    source={images.appLogo}
                    resizeMode="contain"
                    style={{
                        height: 120,
                        width: 170
                    }}
                />
            </View>

            {/* Title & Subtitle */}
            <View
                style={{
                    marginTop: 2,
                    ...titleContainerStyle
                }}
            >
                <Text
                style={{
                    textAlign: "center",
                    ...FONTS.largeTitle
                }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        color: COLORS.darkGray,
                        marginTop: SIZES.base,
                        ...FONTS.body3
                    }}
                >
                    {subtitle}
                </Text>

            </View>

             {/* Content / Children */}
                    {children}
            </KeyboardAwareScrollView>

        </View>
    )
}

export default AuthLayout;