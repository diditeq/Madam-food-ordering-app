import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { FONTS,SIZES, COLORS, icons, images, constants} from '../../constants';
import { TextButton, IconButton, RightArrow} from "../../../src/assets/components";
import {cartItems, cartTotalItems} from "../../SourceData/ExternalData"


const  TrackOrder = ( {navigation} ) => {

    function renderTop(){
        return(
           <View>
             <ImageBackground
               source={images.googleMap}
               style={{ height: "75%", width:"100%"}}
             />
           </View>
        )
    }

    function renderFooter() {
        return (
           <View
             style={{
                backgroundColor: COLORS.primary5,
                paddingHorizontal: SIZES.font,
                borderRadius: 25,
                height:250
             }}
           >
           <Text style={{fontSize:16, fontWeight: "700", marginTop: 50}}>Delivery Time</Text>

           <View
                  style={{
                    flexDirection: 'row' ,
                    marginTop: 5, 
                }}
                >
                <Image
                 source={icons.deliveryMan}
                 style={{flexDirection: 'row', padding:15  }} 
                /> 
                <View style={{padding:15 }} >
                <Text style={{fontSize:15}}>Plate of</Text>
                <Text style={{fontSize:15}}>Jollof rice</Text>
                </View>
           </View>
            
           </View>
        )
      };

    return(
        <SafeAreaView>
        {/* Top Section */}
        {renderTop()}

        {/* Footer Section */}
        {renderFooter()}


     <View style={{ marginTop:30}}>

     <TextButton
     label="Track your Order"
     labelStyle={{
     color: COLORS.white,
     fontSize: 20,
     }}
     buttonContainerStyle={{
     height: 55,
     alignItems: "center",
     marginTop: SIZES.padding,
     borderRadius: SIZES.radius,
     backgroundColor:COLORS.primary
    }}
   onPress={() => navigation.navigate("TrackOrder")}
   />       
   </View>

    </SafeAreaView>
  )
}

export default  TrackOrder;