import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { Header, FormInput, TextButton, IconButton, Button } from "../../assets/components";
import { utils } from "../../../Utils";

import axios from 'axios';


 const ResetPassword = ( {navigation} ) => {

  const [isLoading, setIsLoading] = useState(false);

    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    
    const [passwordError, setPasswordError] = React.useState("")
    const [confirmPasswordError, setConfirmPasswordError] = React.useState("")

    function isEnableChangePassword() {
        return password != "" && passwordError == "" && confirmPassword!= "" && confirmPasswordError == ""
      }

      const handleChangePassword = () => {

        setIsLoading(true);
        // Perform signup logic here
        // Simulate an asynchronous signup operation
        setTimeout(() => {
          setIsLoading(false);
          //Alert.alert('Button pressed!');
          // Handle successful signup or show an error message
        }, 2000);

        // Prepare the password reset data object
        const resetData = {
          password,
          confirm_password: confirmPassword
        };
    
        // Make the API request
        axios.post('https://staging-madam-food.onrender.com/users/resetpassword/2375', resetData)
          .then(response => {
            // Handle the success response
            console.log('Password reset successfull', response.data);
            Alert.alert('Password reset successfull');
            // You can display a success message to the user or perform any other actions here
            navigation.navigate("SuccessPage");
           
          })
          .catch(error => {
            // Handle the error response
            console.log('Password reset failed', error.response.data);
            Alert.alert('Password reset failed');

            // Display an error message to the user or handle the error in some way
          });
      };

    function renderHeader(){
        return(
            <Header
                title="Reset Password"
                containerStyle={{
                    height: 60,
                    paddingVertical: SIZES.base,
                    paddingHorizontal: SIZES.base,
                    marginTop: 40,
                    backgroundColor: COLORS.lightGray2,
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                leftComponent={
                    <IconButton
                        icon={icons.backArrow}
                        containerStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.black
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                }
                rightComponent={
                    <TextButton
                    label="A"
                    buttonContainerStyle={{
                      backgroundColor: COLORS.primary,
                      padding: SIZES.base,
                      height: 40,
                      width: 40,
                      borderRadius: 30
                    }}
                    labelStyle={{
                      color: COLORS.white,
                      ...SIZES.h2
                    }}
                   // onPress={() => navigation.navigate("Profile")}
                    />
                }
            />
        )
    }
  
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.base,
                paddingHorizontal: SIZES.base,
                backgroundColor: COLORS.white,
            }}
        >
            <KeyboardAwareScrollView>
            {/* Header */}
            {renderHeader()}
        
      <View
        style={{
            flex: 1,
            marginTop: SIZES.padding * 2
          }}
      >
         <FormInput
            label="New Password"
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
                  source={showPass ?   icons.eye : icons.eye_close }
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
                  source={showPass ?  icons.eye : icons.eye_close 
                 }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.gray
                  }}
                />
                </TouchableOpacity>
              }
              />

               {/* Button */}
      <Button
        title="Change  Password"
        titleStyle={{
          color: COLORS.white,
          ...SIZES.h2,
        }}
        disabled={isEnableChangePassword() ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableChangePassword() ? COLORS.primary: COLORS.transparent
        }}
        onPress={handleChangePassword }
        isLoading={isLoading} 
        //onPress={() => navigation.navigate("OtpRecoverPass")}
      />       
      </View>
      </KeyboardAwareScrollView>
      </View>
)
}

export default ResetPassword;