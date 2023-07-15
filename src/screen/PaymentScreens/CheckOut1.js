import React from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { FONTS,SIZES, COLORS, icons, constants} from '../../constants';
import { Header, TextButton, IconButton, RightArrow} from "../../../src/assets/components";


const CheckOut1  = ( {navigation} ) => {

    function renderHeader(){
        return(
            <Header
                title="Check Out"
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
                      fontSize:16
                    }}
                   // onPress={() => navigation.navigate("HomePage")}
                    />
                }
            />
        )
    }
    
    function renderPaymentInfo() {
        return(
            <View style={{ marginTop: 10}}>
            <View style={{justifyContent: "space-between" , flexDirection: "row"}}>
            <Text style={{fontSize:16, fontWeight: "700", color: COLORS.primary}}>Payment Method</Text>
            <Text style={{...FONTS.h3, color: COLORS.black }}>Add More</Text>
            </View>
            <Image
            source={icons.ubaCard}
            style={{flexDirection: "row", height: 120, width:200, alignSelf:"center", marginTop: 10 }}
            />
            <View style={{paddingHorizontal: 50, flexDirection: "row", alignSelf:"center",  marginTop: 10 }}>
            <Image source={icons.masterCard} style={{flexDirection: "row", alignSelf:"center",  marginRight: 10, height: 40, width:70}}/>   
            <Image source={icons.visaCard}  style={{flexDirection: "row", alignSelf:"center",  marginRight: 10, height: 40, width:70 }}/>   
            <Image source={icons.verveCard}  style={{flexDirection: "row", alignSelf:"center",  marginRight: 10, height: 40, width:70}}/>   
            <Image source={icons.addIcon}  style={{flexDirection: "row", alignSelf:"center",  marginRight: 10, height: 20, width:20}}/>   
            </View>
            <View style={{ marginTop: 10  }}>
            <Text style={{fontSize:16, fontWeight: "700", color: COLORS.primary}}>Shipping to</Text>
            <View style={{flexDirection: "row",  justifyContent: "space-between", marginTop: 10, alignItems: "center", marginRight:10, marginLeft: -10, }}>
           
            <TouchableOpacity  onPress={() => navigation.navigate("CheckOut2")}>
            <Image source={icons.GroupHome} />   
            </TouchableOpacity>
          
            <TouchableOpacity>
            <Image source={icons.Groupoffice}/>  
            </TouchableOpacity>
            </View>


            <View style={{flexDirection: "row",  justifyContent: "space-between", marginTop: 10, alignItems: "center", marginRight:10, marginLeft: -10, }}>
           
            <TouchableOpacity>
            <Image source={icons.Groupschool} />   
            </TouchableOpacity>

            
            <TouchableOpacity>
            <Image source={icons.GroupaddMore}/>  
            </TouchableOpacity>
            </View>
            <View style={{justifyContent: "space-between" , flexDirection: "row", marginTop: 20}}>
            <Text style={{fontSize:16, fontWeight: "700", color: COLORS.primary}}>Total Price</Text>
            <Text style={{fontSize:16, color: COLORS.black }}>$1,650</Text>
            </View>
            </View>
            </View>
        )
    }

    function renderPay(){
        const paystackWebViewRef = React.useRef(paystackProps.PayStackRef); 
      
        return (
          <View style={{flex: 1}}>
            <Paystack
              paystackKey="pk_test_5d00f4eb5cd99240164cb939d65f032741ac1e94"
              paystackSecretKey="sk_test_9cbf45d9a359f628509d79cebb6907dba3b59407"
              billingEmail="makanjuolabolaji9898@gmail.com"
              billingMobile="123456789"
              billingName="Doris"
              currency="NGN"
              amount={'1650.00'}
              onCancel={(e) => {
               console.log(e)
              }}
              onSuccess={(res) => {
                console.log(res)
              }}
              ref={paystackWebViewRef}
            />
      
              <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}
              style={styles.paystack}
              >
                <Text style={styles.pay}>Pay Now</Text>
              </TouchableOpacity>
            </View>
        );
      }

    return (
        <SafeAreaView
            style={{
                paddingHorizontal:20,
            }}
        >
            {/* Header */}
            {renderHeader()}
            {/* Payment Info */}
            {renderPaymentInfo()}
            
               {/* Footer  */}
         <View style={{ marginTop:20}}>
         {renderPay()}
         {/* <TextButton
        
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
       onPress={handlePay}
       />        */}
       </View>

        </SafeAreaView>
      )
    }

 const styles = StyleSheet.create({
   paystack:{
    minWidth: "60%",
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius:SIZES.radius,
    justifyContent:"center",
    alignItems: "center",
    height: 55,
    alignItems: "center",
    marginTop: SIZES.padding,
   },
   pay: {
     color: COLORS.white,
     fontSize: 20
   },
 });

export default CheckOut1;