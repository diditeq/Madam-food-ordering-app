import { Text, View, Image } from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import { TextButton, Button } from "../../assets/components";

 const SuccessPage = ( {navigation} ) => {

//  const [isLoading, setIsLoading] = useState(false);

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
          <Text style={{ fontSize: 28, color: COLORS.black }}>Your Password has been Successfully Changed</Text>
        </View>
        <View 
          style={{ marginTop: SIZES.radius}}
        >
          <Text style={{ ...FONTS.body3, color: COLORS.black}}>Click on done to confirm and continue to SignIn</Text>
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

export default SuccessPage;