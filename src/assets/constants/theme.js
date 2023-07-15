import * as Font from 'expo-font'
import { Dimensions,props} from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#077F22",
    primary5: "#CDE5D3",
    primary2:"rgba(4, 64, 17, 1)",
    darkGreen: "#286335",
    lightGreen: "#a3f1a3",
    transparent: "#83BF90",
    white: "#FAFBFC",
    white1: '#FFFFFF',
    white2: "#FBFBFB",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray1: "#DDDDDD",
    lightGray2: "#E6E0E9",
    black: "#000000",
    red: "#FF1717",
    blue: '#0064C0',
    darkBlue: "#111A2C",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    white2: "#FBFBFB",
    white: '#FFFFFF',
    


    
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 20,
    radius: 5,
    padding: 10,

    // font sizes
    largeTitle: 30,
    h1: 22,
    h2: 16,
    h3: 14,
    h4: 12,
    body1: 24,
    body2: 22,
    body3: 14,
    body4: 12,
    body5: 10,

    // app dimensions
    width,
    height
};


export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Bold", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Regular", fontSize: SIZES.h1, lineHeight: 26 },
    h2: { fontFamily: "Roboto-Regular", fontSize: SIZES.h2, lineHeight: 24 },
    h3: { fontFamily: "Roboto-Regular", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Regular", fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 26 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 24 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 20 },
  
};


export const font = {
    Roboto: {
    black: 'Roboto-Black',
    bold: 'Roboto-Bold',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    light: 'Roboto-Light',
    thin: 'Roboto-Thin',

    
  },
}

// fonts preloading
export const fontsAll = [
    {
        Roboto_Black: require('../assets/fonts/Roboto-Black.ttf'),
    },
    {
        Roboto_Bold: require('../assets/fonts/Roboto-Bold.ttf'),
    },
    {
        Roboto_Regular: require('../assets/fonts/Roboto-Regular.ttf'),
    },
    {
        Roboto_Medium: require('../assets/fonts/Roboto-Medium.ttf'),
    },
    {
        Roboto_Light: require('../assets/fonts/Roboto-Light.ttf'),
    },
    {
        Roboto_Thin: require('../assets/fonts/Roboto-Thin.ttf'),
    },
   
  ]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))

export const StyledButton =
    style={
        height: 50,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
        borderRadius: SIZES.radius,
        backgroundColor:COLORS.primary 
}
   


const appTheme = { COLORS, SIZES, FONTS, font};

export default appTheme;
