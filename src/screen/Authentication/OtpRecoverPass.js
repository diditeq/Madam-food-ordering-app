import React, {useState} from 'react';
import { View, Text, Alert } from 'react-native';
//import * as Clipboard from 'expo-clipboard';
import Clipboard from '@react-native-community/clipboard';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { FONTS, SIZES, COLORS } from '../../constants';
import { TextButton, Button } from "../../assets/components";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import  AuthLayout from "../Authentication/AuthLayout";
import axios from 'axios';



const OtpRecoverPass = ({ navigation, route }) => {

    const [ timer, setTimer] = React.useState(60)

    React.useState(() =>{
      let interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer > 0) {
            return prevTimer -1
          } else {
              return prevTimer
          }
        })
      }, 1000)

      return () => clearInterval(interval)
    }, [])

   
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const {email} = route.params || {} ;
    console.log(email)


    // const handleOTPVerification = async () => {
    //   try {
    //     setIsLoading(true);
  
    //     // Make the API call to verify the OTP
    //     const response = await axios.post('https://staging-madam-food.onrender.com/users/confirmaccount', {
    //     email,  
    //     confirmationToken: otp
    //     });
  
    //     // Assuming the API call was successful and returned a response indicating the OTP is valid
    //     const message = response.data.message;
  
    //     if (message) {
    //       // Perform any necessary logic when the OTP is valid
  
    //       // Clear the OTP field and any error messages
    //       setOtp('');
    //       setMessage('');
    //       setMessageType('');
  
    //       // Navigate to the SuccessPageSignup screen or any other desired screen
    //       navigation.navigate("ResetPassword");
    //     } else {
    //       // Handle the case when the OTP is not valid
    //       setMessage('Invalid OTP');
    //       setMessageType('ERROR');
    //     }
    //   } catch (error) {
    //     // Handle the error from the API call
    //     setMessage('Failed to verify OTP');
    //     setMessageType('ERROR');
    //     console.log('API call error:', error.response);
    //     Alert.alert('Wrong Otp');
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };



    const handleOTPVerification = async () => {

      try {
        setIsLoading(true);
  
        // Make the API call to verify the OTP
        const response = await axios.post('https://staging-madam-food.onrender.com/users/confirmaccount', {
        email,  
        confirmationToken: otp
        });
  
        // Assuming the API call was successful and returned a response indicating the OTP is valid
        const message = response.data.message;
  
        if (message) {
          // Perform any necessary logic when the OTP is valid
          // Clear the OTP field and any error messages
          setOtp('');
          setMessage('');
          setMessageType('');
  
          // Navigate to the ResetPassword screen or any other desired screen
          navigation.navigate('ResetPassword');
        } else {
          // Handle the case when the OTP is not valid
          setMessage('Invalid OTP');
          setMessageType('ERROR');
        }
      } catch (error) {
        // Handle the error from the API call
        setMessage('Failed to verify OTP');
        setMessageType('ERROR');
        console.log('API call error:', error.response.data);
        Alert.alert('Error');
      } finally {
        setIsLoading(false);
      }
    };

    //   setIsLoading(true);
    //   // Perform signup logic here
    //   // Simulate an asynchronous signup operation
    //   setTimeout(() => {
    //     setIsLoading(false);
    //    // Alert.alert('Button pressed!');
    //     // Handle successful signup or show an error message
    //   }, 2000);


    //   const otpData = {
    //     email,  
    //     confirmationToken: otp
    //   };
  
    //   // Make the API request
    //    axios.post('https://staging-madam-food.onrender.com/users/confirmaccount', otpData)
    //     .then(response => {
    //       // Handle the success response
    //       console.log('success');
    //       Alert.alert('success');
    //       // You can navigate to the next screen or perform any other actions here
    //       navigation.navigate("ResetPassword")
    //     })
    //     .catch(error => {
    //       // Handle the error response
    //       console.log('Invalid OTP');
    //    Alert.alert('Invalid OTP');
    //       // Display an error message to the user or handle the error in some way
    //     });
    // };

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An Authentication code has been sent to this email"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2
      }}
    >
      <KeyboardAwareScrollView>
      {/* OTP inputs */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding *2
        }}
      >
          <OTPInputView 
        //  autofillFromClipboard={false}
           autoFocusOnLoad ={false}
            pinCount={4}
            style={{
              width: "100%",
              height: 50
            }}
            codeInputFieldStyle={{
              width: 65,
              height:65,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray2,
              color: COLORS.black,
              ...FONTS.h3
            }}
            onCodeFilled={(code) => {
              console.log(code)
              setOtp(code)
            }}
          />
      </View>
      {/* Countdown Timer */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: SIZES.padding *2
              }}
            >
              <Text style={{ color: COLORS.darkGray, ...SIZES.h3}}>Didn't receive code?</Text>

              <TextButton
                label={`Resend (${timer}s)`}
                disabled={timer == 0 ? false : true}
                buttonContainerStyle={{
                  marginLeft: SIZES.base,
                  backgroundColor: null
                }}
                labelStyle={{
                  color: COLORS.primary,
                  ...FONTS.h4
                }}
                onPress={() => setTimer(60)}
              />
            </View>
      {/* Footer */}
      <View
        style={{marginTop: 170}}
      >
        <Button
          title="Continue"
          titleStyle={{
            color: COLORS.white,
            ...SIZES.h2,
          }}
          buttonContainerStyle={{
            height:50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary
          }}

          onPress={handleOTPVerification} // Call the OTP verification function
          isLoading={isLoading} // Pass the loading state to display a loading indicator

          //onPress={() => navigation.navigate("SuccessPage")}

        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...SIZES.h3
            }}
          >
            Your Password will be Changed Shortly
          </Text>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </AuthLayout>
  )
}


export default OtpRecoverPass;