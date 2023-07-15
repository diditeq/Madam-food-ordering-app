import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet
} from 'react-native';

import  AuthLayout from "../Authentication/AuthLayout";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, TextIconButton, Button } from "../../assets/components";
import { utils } from "../../../Utils";
import axios from 'axios';
//import { GoogleSignin, statusCodes } from 'react-native-google-signin';


const SignUp = ({ navigation }) => {
 
 // const [name, setName] = useState("");

 
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {

    setIsLoading(true);
    // Perform signup logic here
    // Simulate an asynchronous signup operation
    setTimeout(() => {
      setIsLoading(false);
     // Alert.alert('Button pressed!');
      // Handle successful signup or show an error message
    }, 2000);

    // Prepare the signup data object
    const signupData = {
      email,
      username,
      password,
      confirmPassword: confirmPassword,
      name: username
    };

    // Make the API request
    axios.post('https://staging-madam-food.onrender.com/users/registeruser', signupData)
      .then(response => {
        // Handle the success response
        console.log('An Otp has been sent to your Email', response.data);
        Alert.alert('An Otp has been sent to your Email');
        // You can navigate to the next screen or perform any other actions here
        navigation.navigate("Otp", {email});
      })
      .catch(error => {
        // Handle the error response
        console.log('Email or Username already exist', error.response.data);
        Alert.alert("Email or Username already exist");
        // Display an error message to the user or handle the error in some way
      });
  };

  const [email, setEmail] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [showPass, setShowPass] = React.useState(false)
  

  const [emailError, setEmailError] = React.useState("")
  const [usernameError, setUsernameError] = React.useState("")
  const [passwordError, setPasswordError] = React.useState("")
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("")

  
  function isEnableSignUp() {
    return email != "" && username != "" && password != "" && confirmPassword != "" 
           
          }


  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue"
      titleContainerStyle={{
        marginTop: SIZES.radius
      }}
    >
      <KeyboardAwareScrollView>
      {/* Form Input And Sign Up */}

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

        <FormInput
          label="Username"
          containerStyle={{
            marginTop: SIZES.radius
          }}
          onChange={(value) => {
            setUsername(value)
          }}
          errorMsg={usernameError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center'
              }}
            >
              <Image
                source={username =="" || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: username == ""? COLORS.gray : (username != "" && usernameError == "") ? COLORS.primary : COLORS.red
                }}
              />
            
            </View>          
          }
        />
        <FormInput
            label="Password"
            securityTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{
              marginTop: SIZES.radius
            }}
            onChange={(value) => {
              utils.validatePassword(value,
                setPasswordError)
                setPassword(value)
              }}
              errorMsg={passwordError}
              appendComponent={
              <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
              onPress={() => setShowPass(!showPass)}
              >
                <Image
                  source={showPass ? icons.eye:
                   icons.eye_close }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray
                  }}
                />
                </TouchableOpacity>
              }
              />

            <FormInput
            label="Confirm Password"
            securityTextEntry={!showPass}
            autoCompleteType="confirm-password"
            containerStyle={{
              marginTop: SIZES.radius
            }}
            onChange={(value) => {
              utils.validateConfirmPassword(value,
                setConfirmPasswordError)
                setConfirmPassword(value)
              }}
              errorMsg={confirmPasswordError}
              appendComponent={
              <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
              onPress={() => setShowPass(!showPass)}
              >
                <Image
                  source={showPass ? icons.eye:
                    icons.eye_close }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray
                  }}
                />
                </TouchableOpacity>
              }
              />
              {/* Sign up & Sign In */}
              <View>
              <Button
               title="Sign up" 
               titleStyle={{
                  color: COLORS.white,
                  ...SIZES.h2,
                }}
                disabled={isEnableSignUp() ? false : true}
                buttonContainerStyle={{
                  height: 50,
                  alignItems: 'center',
                  marginTop: SIZES.padding,
                  borderRadius: SIZES.radius,
                  backgroundColor: isEnableSignUp() ? COLORS.primary :  COLORS.transparent
                }}
                onPress={handleSignUp}
                isLoading={isLoading}
               // onPress={() => navigation.navigate("Otp")}
               />
              
               </View>
       {/* Footer */}

       <View>

       <View
             style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "center"
            }}
            >
            <Text
              style={{
                color: COLORS.black,
                marginBottom: 15,
                marginTop: 5,
                ...SIZES.h3
              }}
            >
              Already have an account?
            </Text>
            <TextButton
                label="SignIn"
                buttonContainerStyle={{
                  marginLeft: 3,
                  backgroundColor: null
                }}  
                labelStyle={{
                  marginBottom: 15,
                  marginTop: 5,
                  color: COLORS.primary,
                  ...SIZES.h3,
                  backgroundColor: COLORS.white
                }}
                onPress={() => navigation.goBack()}
            />
        </View>
        <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.radius,
          marginLeft: 65,
          marginRight: 65,
          alignItems: 'space-between',
          justifyContent: 'space-between'
        }}
      >
          {/* Google */}
          <TextIconButton
              containerStyle={{
                height: 60,
                width: 60,
                alignItems: "center",
                borderRadius: SIZES.radius,
                borderWidth: 3,
                borderColor: COLORS.gray2,
                backgroundColor: COLORS.lightGray2
              }}
              icon={icons.gmail}
              iconPosition= "CENTER"
              iconStyle={{
                tintColor: null
              }}
              onPress={() => console.log("Google")}
            />

          {/* Facebook */}
            <TextIconButton
              containerStyle={{
                height: 60,
                width: 60,
                alignItems: "center",
                borderRadius: SIZES.radius,
                borderWidth: 3,
                borderColor: COLORS.gray2,
                backgroundColor: COLORS.lightGray2
              }}
              icon={icons.fb}
              iconPosition= "CENTER"
              iconStyle={{
                tintColor: null
              }}
              onPress={() => console.log("FB")}

            />
             </View>
       </View>
       </KeyboardAwareScrollView>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
 
});

export default SignUp;