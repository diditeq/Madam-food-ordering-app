import { StatusBar } from 'expo-status-bar';
import React from "react";
import { KeyboardAvoidingView, Platform, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import { useEffect } from "react"
import StackScreens from "./src/Navigation/StackScreen";

import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
    
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.preventAutoHideAsync, 100);

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require('./src/assets/fonts/Roboto-Regular.ttf'),
        "Roboto-Bold": require('./src/assets/fonts/Roboto-Bold.ttf'),
       });
       useEffect(() => {
        async function prepare(){
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
       }, []);

       if (!fontsLoaded) {
        return null;
       } else {
         SplashScreen.hideAsync();
       }
    
    return (
        <SafeAreaProvider>
          <KeyboardAvoidingView
           style={{ flex:1}}
           behavior={Platform.OS === 'andriod' ? 'padding' : 'height'}
           KeyboardVerticalOffSet={Platform.OS === 'andriod' ? -64 : 0}
          >
        <NavigationContainer>
          <StackScreens />
        </NavigationContainer>
        </KeyboardAvoidingView>
        </SafeAreaProvider>
     );
    }

export default App;
