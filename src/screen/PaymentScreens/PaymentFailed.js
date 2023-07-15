import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { FONTS,SIZES, COLORS, icons, constants} from '../../constants';
import { TextButton, IconButton, RightArrow} from "../../../src/assets/components";
import {cartItems, cartTotalItems} from "../../SourceData/ExternalData"


const  PaymentFailed  = ( {navigation} ) => {

    function renderTop(){
        return(
           <View style={{ marginTop: 70}}>
            <Image
             source={icons.failedIcon}
             style={{ flexDirection: "row", alignSelf:"center", marginTop: 10, height:60, width: 60}}
            />
            <View style={{alignSelf:"center" , marginTop: 20 }}>
                <Text style={{fontSize:25, fontWeight: "500", color: COLORS.black}}>Payment Failed</Text>
            </View>
                <View style={{alignSelf:"center" , marginTop: 20 }}>
                <Text style={{fontSize:20, fontWeight: "300", color: COLORS.black,  marginTop: 8}}>Order Details</Text>
                </View>
            
           </View>
        )
    }

    function renderCartSubTotal() {
        const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const Tax = cartItems.reduce((acc, item) => acc + item.price * item.quantity * item.Tax, 0);
        const Fee = cartItems.reduce((acc, item) => acc + item.price * item.quantity* item.Fee, 0);
      
        return (
            <View>
          <View style={{ justifyContent: "space-between" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:16,}}>SubTotal</Text>
             <Text style={{fontSize:16,}}>${subTotal}</Text>
             </View>

             <View style={{ justifyContent: "space-between" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:16,}}>Tax(10%)</Text>
             <Text style={{fontSize:16,}}>${Tax}</Text>
             </View>

             <View style={{justifyContent: "space-between" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:16,}}>Fee </Text>
             <Text style={{fontSize:16,}}>${Fee}</Text>
             </View>
          
          </View>
        );
      };
      
    const Line = () => {
        return <View style={styles.line} />;
      };

      function renderCartDetails() {
        return (
            <View>
            <View style={{ justifyContent: "space-between" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:16,}}>Card</Text>
            <Text style={{fontSize:16,}}>*******2343</Text>
            </View>
            </View>
        )
      }


      function renderCartTotal() {
            const totalAmount =  cartTotalItems.reduce((acc, item) => acc + item.amount * item.quantity, 0);
          
            return (
            <View>
            <View style={{ justifyContent: "space-between" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:16, fontWeight: "500", color: COLORS.primary}}>Total</Text>
            <Text style={{fontSize:16,}}>${totalAmount}</Text>
            </View>
            </View>
            );
          };

    return(
        <SafeAreaView
        style={{
            paddingHorizontal:20,
        }}
    >
        {/* Top */}
        {renderTop()}

        {/*Sum Cart Total */}
        {renderCartSubTotal()}

        {/* Line */}
        
        <Line style={styles.container}/>

        {/*Card Details */}
        {renderCartDetails()}

         {/* Line */}
        
         <Line style={styles.container}/>

        {/* Footer  */}

        {renderCartTotal() }

     <View style={{ marginTop:30}}>

     <TextButton
     label="Try Again"
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
   onPress={() => navigation.navigate("Payment")}
   />       
   </View>

    </SafeAreaView>
  )
}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: 'gray',
      marginTop: 30
    },
})

export default  PaymentFailed;