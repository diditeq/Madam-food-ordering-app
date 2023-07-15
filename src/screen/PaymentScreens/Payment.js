import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { FONTS,SIZES, COLORS, icons, constants} from '../../constants';
import { Header, TextButton, IconButton, RightArrow} from "../../../src/assets/components";


const Payment  = ( {navigation} ) => {

    function renderHeader(){
        return(
            <Header
                title="Payment"
                titleStyle={{ marginBottom:-12, justifyContent: 'center', fontSize: 20, color: COLORS.primary}}
                containerStyle={{
                    height: 70,
                    paddingVertical: SIZES.base,
                    paddingHorizontal: 20,
                    marginTop: 50,
                    backgroundColor: COLORS.lightGray2,
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: SIZES.base,
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
                       onPress={() => navigation.goBack("Settings")}
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
                      ...SIZES.body2
                    }}
                   // onPress={() => navigation.navigate("HomePage")}
                    />
                }
            />
        )
    }
    function renderPaymentCard() {
        return(
            <View style={{ marginTop: 10}}>
            <View style={{justifyContent: "space-between" , flexDirection: "row"}}>
            <Text style={{fontSize:16, fontWeight: "700", color: COLORS.primary}}>Saved Card</Text>
            <Text style={{...FONTS.h3, color: COLORS.black }}>Add New Card</Text>
            </View>
            <Image
            source={icons.ubaCard}
            style={{alignSelf:"center", height: 120, width:200,marginTop: 10 }}
            />
            <View style={{ alignSelf:"center",  marginTop: 10 }}>
            <Image source={icons.AddVerve} style={{flexDirection: "row", alignSelf:"center", marginTop: 30}}/>   
            <Image source={icons.addMaster}  style={{flexDirection: "row", alignSelf:"center",  marginTop: 20}}/>   
            </View>
            
            <View style={{alignSelf:"center" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:18, fontWeight: "700", color: COLORS.primary}}>Add Payment Method</Text>
            </View>
            <TouchableOpacity style={{ alignSelf:"center",  marginTop: 10 }}>
            <Image source={icons.addPay}  style={{flexDirection: "row", alignSelf:"center",  marginTop: 20, marginBottom: 30}}
             onPress={() => navigation.navigate("PaymentFailed")}
            />   
            </TouchableOpacity>
            </View>
            
        )
    }


    return (
        <SafeAreaView
            style={{
                paddingHorizontal:20,
            }}
        >
            {/* Header */}
            {renderHeader()}
            {/* Payment Card */}
            {renderPaymentCard()}
            
            {/* Footer  */}
            {/* Pay Now */}

         <View style={{ marginTop:30}}>

         <TextButton
         label="Pay Now"
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
       onPress={() => navigation.navigate("OrderSuccess")}
       />       
       </View>

       {/* Add New Card */}
       <View>
       <TextButton
        label="Add New Card "
        labelStyle={{
        color: COLORS.primary,
        fontSize: 20,
        }}
         buttonContainerStyle={{
         height: 55,
         alignItems: "center",
         marginTop: SIZES.padding,
         borderRadius: SIZES.radius,
         borderColor: COLORS.primary,
         borderWidth: 2
       }}
       onPress={() => navigation.navigate("PaymentFailed")}
      />       
    </View>
    </SafeAreaView>
   )
}

export default Payment;