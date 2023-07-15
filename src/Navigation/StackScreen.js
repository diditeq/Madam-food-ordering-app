import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from "./BottomTabs";


import {
    Onboarding,

    SignIn,
    ForgotPassword,
    SignUp,
    Otp,
    SuccessPageSignup,
    ResetPassword,
    OtpRecoverPass,
    SuccessPage,

    HomePage,
    Cart,
    Categories,
    Favourite,
    Menu,
    Search,

    UserAccount,
    Settings,
    Notification,

    CheckOut1,
    CheckOut2,
    Payment,
    OrderSuccess,
    PaymentFailed,
    TrackOrder
    
   
} from '../screen';



const Stack = createNativeStackNavigator();

const StackScreen = () => {
    
    return ( 
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Onboarding"}
            >
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="HomePage"  component={BottomTabs} />
                <Stack.Screen name="Search"  component={Search} />
                <Stack.Screen name="Menu"  component={Menu} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Favourite" component={Favourite} />
               
                <Stack.Screen name="Cart"  component={Cart} />
                <Stack.Screen name="CheckOut1"  component={CheckOut1} />
                <Stack.Screen name="CheckOut2"  component={CheckOut2} />

                <Stack.Screen name="Payment"  component={Payment} />
                <Stack.Screen name="OrderSuccess"  component={OrderSuccess} />
                <Stack.Screen name="PaymentFailed"  component={PaymentFailed} />
                <Stack.Screen name="TrackOrder"  component={TrackOrder} />



                <Stack.Screen name="UserAccount"  component={UserAccount} />
                <Stack.Screen name="Settings"  component={Settings} />
                <Stack.Screen name="Notification"  component={Notification} />


            
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="SuccessPageSignup" component={SuccessPageSignup} />
                

            
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="OtpRecoverPass"  component={OtpRecoverPass} />
                <Stack.Screen name="SuccessPage"  component={SuccessPage} />





                

            </Stack.Navigator>

    )
}

export default StackScreen;