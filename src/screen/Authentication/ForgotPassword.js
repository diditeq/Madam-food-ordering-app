import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  AuthLayout from "../Authentication/AuthLayout";
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, Button } from "../../assets/components";
import { utils } from "../../../Utils";
import axios from 'axios';



const ForgotPassword = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRecoverPassword = () => {

    setIsLoading(true);
    // Perform signup logic here
    // Simulate an asynchronous signup operation
    
    
    // Prepare the recovery data object
    const recoveryData = {
      email,
    };

    // Make the API request
    axios.post('https://staging-madam-food.onrender.com/users/forgotpassword', recoveryData)
      .then(response => {
        // Handle the success response
        console.log('Recovery request successfull');
        Alert.alert("Recovery request successfull");
        // You can display a success message to the user or perform any other actions here
        navigation.navigate("OtpRecoverPass", {email});
      })
      .catch(error => {

        // Handle the error response
        console.log('Recovery request failed', error);
        Alert.alert("Recovery request failed");
        // Display an error message to the user or handle the error in some way
      }).finally(()=> {
        setIsLoading (false)
      })
  };



  const [email, setEmail] =React.useState("")
  const [emailError, setEmailError] = React.useState("")

  function isEnableRecoverPassword() {
    return email != "" && emailError == "" 
  }

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Please enter your email address to recover your password"
      titleContainerStyle={{
        marginTop: SIZES.padding *2
      }}
    >
      <KeyboardAwareScrollView>
      {/* Form Input */}
      <View
        style={{
          flex: 1,
          marginBottom: SIZES.padding *2
        }}
      >
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError)
            setEmail(value)
          }}
          errorMsg={emailError}
         
          appendComponent={
            <View
              style={{
                justifyContent: "center"
              }}
            >
              
              <Image
                  source={email == ""|| (email !="" && emailError == "") ? icons.correct : icons.cancel}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.primary : COLORS.red
                  }}
              />
            </View>
          }
        />
      </View>
      
      {/* Button */}
      <Button
        title="Recover  Password"
        titleStyle={{
          color: COLORS.white,
          ...SIZES.largeTitle,
        }}
        disabled={isEnableRecoverPassword() ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableRecoverPassword() ? COLORS.primary: COLORS.transparent
        }}

        onPress={handleRecoverPassword}
        isLoading={isLoading}
       // onPress={() => navigation.navigate("ResetPassword")}
       
      />
    </KeyboardAwareScrollView>
    </AuthLayout>
  )
}

export default ForgotPassword;