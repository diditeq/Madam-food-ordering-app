import React, {useState} from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   Image,
   Alert,
   StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  AuthLayout from "../Authentication/AuthLayout";
import { FONTS, SIZES, COLORS,icons } from '../../constants';
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
  MsgBox,
  Button
} from "../../assets/components";
import { utils } from "../../../Utils"
import { SafeAreaView } from 'react-native';
import axios from 'axios';




const SignIn = ( {navigation} ) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {

    setIsLoading(true);
      // Perform signup logic here
      // Simulate an asynchronous signup operation
      setTimeout(() => {
        setIsLoading(false);
        //Alert.alert('Button pressed!');
        // Handle successful signup or show an error message
      }, 2000);

    const signinData = {
      email,
      password,
    };

    // Make the API request
    axios.post('https://staging-madam-food.onrender.com/users/login', signinData)
      .then(response => {
        // Handle the success response
        console.log('success');
        Alert.alert('success');
        // You can navigate to the next screen or perform any other actions here
        navigation.navigate("HomePage")
      })
      .catch(error => {
        // Handle the error response
        console.log('Invalid email or password');
     Alert.alert('Invalid email or password.');
        // Display an error message to the user or handle the error in some way
      });
  };

  //   axios.get('https://staging-madam-food.onrender.com/users/login', {
  //     headers: {
  //       'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUwMjQzMzcsImV4cCI6MTY4NTAyNzkzN30.nyCC-v2QoAH3c7RKurbEiXwoTeFCO3HW8JvDSHMIrC4"
  //     }
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });



  //   setIsLoading(true);
  //   // Perform signup logic here
  //   // Simulate an asynchronous signup operation
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     //Alert.alert('Button pressed!');
  //     // Handle successful signup or show an error message
  //   }, 2000);

  //   navigation.navigate("HomePage")
  //   // Reset error messages
  //   setMessage("");
  //   setMessageType("");
  
  //   // Validate input fields
  //   if (email === "") {
  //     setMessage("Please enter your email");
  //     setMessageType("error");
  //     return;
  //   }
  //   if (password === "") {
  //     setMessage("Please enter your password");
  //     setMessageType("error");
  //     return;
  //   }
  
  //   setIsSubmitting(true);
  //   setIsLoading(true);
  
  //   try {
  //     // Make the API call
  //     const response = await axios.post("https://staging-madam-food.onrender.com/users/login", {
  //       email,
  //       password,
  //     });
  
  //     // Handle the response
  //     if (response.data.success) {
  //       // Successful sign-in
  //       setMessage("Sign-in successfull");
  //       setMessageType("success");
  //       console.log('success');
  //       Alert.alert('success');
  //       // Perform any necessary actions, such as storing authentication token
  //       // or navigating to the next screen
  //     } else {
  //       // Failed sign-in
  //       setMessage(response.data.message);
  //       setMessageType("error");
  //       console.log('error');
  //       Alert.alert('error');

  //     }
  //   } catch (error) {
  //     // Error handling
  //     setMessage("An error occurred. Please try again later.");
  //     setMessageType("error");
  //     console.error(error);
  //     console.log('An error occurred. Please try again later.');
  //     Alert.alert('An error occurred. Please try again later.');
  //   }
  
  //   setIsSubmitting(false);
  //   setIsLoading(false);
  // };

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [emailError, setEmailError] = React.useState("")

  const [showPass, setShowPass] = React.useState(false)
  const [save, setSave] = React.useState(false)

  const [message, setMessage] = React.useState();
  const [messageType, setMessageType] = React.useState();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const Line = () => {
    return <View style={styles.line} />;
  };

  function isEnableSignIn() {
    return email != ""  && password != ""      
          }

  
  return (
    <AuthLayout
      title= "Welcome Back!"
      subtitle= "Let's Sign You in"
    >
      <KeyboardAwareScrollView>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2
        }}
      >
        {/* Form Input */}
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
            label="Password"
            securityTextEntry={!showPass}
            autoCompleteType="password"
            containerStyle={{
              marginTop: SIZES.radius
            }}
            onChange={(value) => setPassword(value)}
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
        <View>
       
        </View>
        {/* Save & Forget Password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between'
          }}
        >
          <CustomSwitch
            value={save}
            onChange={(value) => setSave(value)}
          />
          <TextButton
            label="Forgot Password?"
            buttonContainerStyle={{
              backgroundColor: null
            }}
            labelStyle={{
              color: COLORS.primary,
              ...SIZES.h4
            }}
            onPress={() => navigation.replace("ForgotPassword")}
          />
        </View>
         
        
        <MsgBox >{message}</MsgBox>
        
              {/* Sign In */}

        <Button
                title="Sign In"
                titleStyle={{
                  color: COLORS.white,
                  ...SIZES.h1,
                }}
                disabled={isEnableSignIn() ? false : true}
                buttonContainerStyle={{
                  height: 50,
                  alignItems: 'center',
                  marginTop: SIZES.padding,
                  borderRadius: SIZES.radius,
                  backgroundColor: isEnableSignIn() ? COLORS.primary :  COLORS.transparent
                }}
                onPress={handleSignIn}
                isLoading={isLoading}
               // onPress= {() => navigation.navigate("HomePage")}
        />
               
        
        {/* Sign Up */}
        <View>
        <View style={styles.container2}>
      <Line style={styles.line} />
      <Text style={styles.text}>or continue with</Text>
      <Line style={styles.line} />
    </View>
        </View>

      </View>
      {/* Footer */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.radius,
          marginLeft: 80,
          marginRight: 80,
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
              onPress={() => console.log("google")}
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
            <View
             style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "center"
            }}
            >
            <Text
              style={{
                color: COLORS.black,
                ...SIZES.h3,
                marginTop: 25,
              }}
            >
              Don't have an account?
            </Text>
            <TextButton
                label="SignUp"
                buttonContainerStyle={{
                  marginLeft: 3,
                  marginTop: 25,
                  backgroundColor: null
                }}  
                labelStyle={{
                  color: COLORS.primary,
                  ...SIZES.h3,
                  backgroundColor: COLORS.white
                }}
                onPress={() => navigation.navigate("SignUp")}
            />

            </View>
            </KeyboardAwareScrollView>
           
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: 50,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  button: {
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  buttonText: {
    color:  COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: 13,
  },
  activityIndicator: {
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom:15,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  line: {
    width: '30%',
    height: 1,
    flex: 1,
    backgroundColor: 'gray',
  },
 
});




export default SignIn;