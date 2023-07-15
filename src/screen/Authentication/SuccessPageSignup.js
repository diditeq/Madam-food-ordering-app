import React, {useState} from 'react'
import { Text, View, Image } from 'react-native';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import { TextButton, Button } from "../../assets/components";

 const SuccessPageSignup = ( {navigation} ) => {

 // const [isLoading, setIsLoading] = useState(false);

  // setIsLoading(true);
  //     // Perform signup logic here
  //     // Simulate an asynchronous signup operation
  //     setTimeout(() => {
  //       setIsLoading(false);
  //      // Alert.alert('Button pressed!');
  //       // Handle successful signup or show an error message
  //     }, 2000);


    return (
      <View
        style={{
          flex: 1,
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       <Image
                  source={icons.good}
                  style={{
                    height: 180,
                    width: 180,
                  }}
      />
        <View 
          style={{ marginTop: SIZES.radius,  alignItems: "center", justifyContent: "center"}}
        >
          <Text style={{ fontSize: 23, color: COLORS.black, justifyContent: "center" }}>You have Signed Up Successfully</Text>
        </View>
        <View 
          style={{ marginTop: SIZES.radius, padding:12}}
        >
          <Text style={{ fontSize:16, color: COLORS.black}}>Click on done to Sign In to have a wonderful experience with us</Text>
        </View>
    
      {/* Button */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <Button
        title="Done"
        buttonContainerStyle={{
          height: 55,
          width: 340,
          marginTop: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary
        }}
        titleStyle={{
          color: COLORS.white,
          ...FONTS.body2,
        }}
        onPress={() => navigation.navigate("SignIn")}
      //  isLoading={isLoading}
        />
        </View>
      </View>
)
}

export default SuccessPageSignup;