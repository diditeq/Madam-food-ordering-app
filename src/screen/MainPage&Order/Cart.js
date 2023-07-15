import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet , ScrollView} from 'react-native';
import { FONTS, SIZES, COLORS, icons} from '../../../src/constants';
import { Header, TextButton, IconButton, RightArrow, Schedule} from "../../../src/assets/components";
import {billsDetails, billsTotal} from "../../SourceData/ExternalData";
import Icon from 'react-native-vector-icons/FontAwesome';
import StepperInput from "../../constants/StepperInput"

import {SwipeListView} from 'react-native-swipe-list-view';



const Cart = ( {navigation} ) => {  
    const [qty, setQty] = useState(1);
 
    const [qtyPlateofJellofrice, setqtyPlateofJellofrice] = useState(1);
    const [qtyPlateofFufu, setqtyPlateofFufu] = useState(1);
    const [qtyPlateofFriedRice, setQtyPlateofFriedRice] = useState(1);
    

    //Handler
    
    function renderHeader(){
        return(
            <Header
                title="My Cart"
                titleStyle={{ marginBottom:-12, justifyContent: 'center', fontSize: 20, color: COLORS.primary}}
                containerStyle={{
                    height: 70,
                    paddingVertical: SIZES.base,
                    paddingHorizontal: SIZES.font,
                    marginTop: 10,
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
                       onPress={() => navigation.goBack("Favourite")}
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

    function renderYourOrder(){
        return(
            <View
            style={{
              justifyContent:"space-between",
              flexDirection: 'row' ,
              alignItems: "center"
          }} 
          >
          <Text style={{fontSize:16, color: COLORS.primary}}>Your Order</Text>
          <TouchableOpacity 
             style={{marginTop: 5}}
            onPress={() => navigation.navigate("Favourite")}>
           <Text style={{fontSize:14,marginTop: 1}}>Remove
           <Image
               source={icons.trash2}
              /> 
           </Text> 
          </TouchableOpacity>
          </View>

        )}

    function renderCartList(){
        return(
            <View>
                <View
                  style={{
                    flexDirection: 'row' ,
                    marginTop: 5, 
                }}
                >
                <Image
                 source={icons.platejollof}
                 style={{flexDirection: 'row', padding:15,  height: 80, width: 80   }} 
                /> 
                <View style={{padding:15 }} >
                <Text style={{fontSize:15}}>Plate of {"\n"}
                Jollof rice
                </Text>
                <Text style={{fontSize:15}}>₦550</Text>
                </View>
               
                <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        left: 50
                         }}>
                 {/*StepperInput */}
              <StepperInput
               value={qtyPlateofJellofrice}
               onAdd={() => setqtyPlateofJellofrice(qtyPlateofJellofrice + 1)}
               onMinus={() => {
                if (qtyPlateofJellofrice > 1) {
                  setqtyPlateofJellofrice(qtyPlateofJellofrice - 1)
                }
               }}
               />
                </View>
                </View>
                <View>
                <View
                  style={{
                    flexDirection: 'row' ,
                    marginTop: -1, 
                }}
                >
                <Image
                 source={icons.platefufu}
                 style={{flexDirection: 'row', padding:15,  height: 80, width: 80   }} 
                /> 
                <View style={{padding:15 }} >
                <Text style={{fontSize:15}}>Plate of {"\n"} Fufu</Text>
                <Text style={{fontSize:15}}>₦450</Text>
                </View>
               
                <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        left: 55

                         }}>
                 {/*StepperInput */}
                 <StepperInput
               value={qtyPlateofFufu}
               onAdd={() => setqtyPlateofFufu(qtyPlateofFufu + 1)}
               onMinus={() => {
                if (qtyPlateofFufu> 1) {
                    setqtyPlateofFufu( qtyPlateofFufu - 1)
                }
               }}
               />
                </View>
                </View>
                </View>
            <View>
            <View
                  style={{
                    flexDirection: 'row' ,
                    marginTop: -1, 
                }}
                >
                <Image
                 source={icons.platefried}
                 style={{flexDirection: 'row', padding:15,  height: 80, width: 80   }} 
                /> 
                <View style={{padding:15 }} >
                <Text style={{fontSize:15}}>Plate of Fried {"\n"}
                Rice</Text>
               {/* <Text style={{fontSize:15}}>rice</Text> */}
                <Text style={{fontSize:15}}>₦450</Text>
                </View>
               
                <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        left: 20

                         }}>
                 {/*StepperInput */}
                 <StepperInput
               value={qtyPlateofFriedRice}
               onAdd={() => setQtyPlateofFriedRice(qtyPlateofFriedRice + 1)}
               onMinus={() => {
                if (qtyPlateofFriedRice > 1) {
                    setQtyPlateofFriedRice( qtyPlateofFriedRice - 1)
                }
               }}
               />
                </View>
                </View>
            </View>
             <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
             <TextButton
                    label="Schedule"
                    buttonContainerStyle={{
                      backgroundColor: COLORS.lightGray2,
                      padding: SIZES.base,
                      height: 60,
                      width: 100,
                      borderRadius: 5,
                    }}
                    labelStyle={{
                      color:COLORS.primary,
                      fontSize:20,
                      fontWeight:"700",
                    }}
                   // onPress={() => navigation.navigate("HomePage")}
                   />             
                    <TextButton
                    label="Now"
                    buttonContainerStyle={{
                      backgroundColor: COLORS.primary,
                      padding: SIZES.base,
                      height: 60,
                      width: 100,
                      borderRadius: 5,
                    }}
                    labelStyle={{
                      color:COLORS.white,
                      fontSize:20,
                      fontWeight:"700",
                    }}
                    onPress={() => navigation.navigate("CheckOut1")}
                   />   
             </View>
            {/* Bill Details*/}
             <View
             style={{
              justifyContent:"space-between",
              flexDirection: 'row' ,
              alignItems: "center"
          }} 
          >
          <Text style={{fontSize:18, color: COLORS.primary, fontWeight:'700'}}>Bill details</Text>
             </View>
            </View>
        )
    }

    function renderBilldetails() {
        const subTotal = billsDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const selectedItems = billsDetails.reduce((acc, item) => acc + item.selectedItem  * item.quantity * item.selectedItem , 0);
        const deliveryFee = billsDetails.reduce((acc, item) => acc + item.deliveryFee * item.quantity, 0);
      
        return (
            <View style={{marginTop:-10}}>
          <View style={{
             backgroundColor:COLORS.lightGray1,
             borderRadius:5,
             height: 30,
             width: 320,
             flexDirection: "row",
             marginTop: 15}}>
            <Text style={{fontSize:16, marginLeft: 20,  marginTop: 3 }}>Subtotal</Text>
             <Text style={{fontSize:16,marginLeft: 170,  marginTop: 3}}>₦{subTotal}</Text>
             </View>

             {/* <View style={{ 
             backgroundColor:COLORS.lightGray1,
             borderRadius:5,
             height: 30,
             width: 320,
             flexDirection: "row",
             marginTop: 5}}>
            <Text style={{fontSize:16,marginLeft: 20, marginTop: 3}}>Selected item</Text>
             <Text style={{fontSize:16, marginLeft: 135, marginTop: 3}}>{selectedItems}</Text>
             </View> */}

             <View style={{
                backgroundColor:COLORS.lightGray1,
                borderRadius:5,
                height: 30,
                width: 320,
                flexDirection: "row",
                marginTop: 5
             }}>
            <Text style={{fontSize:16, marginLeft: 20, marginTop: 3}}>Delivery fee </Text>
             <Text style={{fontSize:16, marginLeft: 145, marginTop: 3}}>₦{deliveryFee}</Text>
             </View>
             </View>
        )
    }

    function renderBillsTotal() {
        const totalAmount =  billsTotal.reduce((acc, item) => acc + item.amount * item.quantity, 0);
      
        return (
        <View>
        <View style={{ 
            backgroundColor:COLORS.lightGray1,
            borderRadius:5,
            height: 30,
            width: 320,
            flexDirection: "row",
            marginTop: 5
        }}>
        <Text style={{fontSize:16, fontWeight: "500", color: COLORS.primary, alignSelf: "center",marginLeft: 20, marginTop: 3}}>Total Price</Text>
        <Text style={{fontSize:16,marginLeft: 155, marginTop:5}}>₦{totalAmount}</Text>
        </View>
        </View>
        );
      };

      function renderAddMore() {
        return (
            <TouchableOpacity style={{
                height: 55,
                width: 120,
                borderRadius:5,
                borderWidth: 2,
                borderColor: COLORS.primary, 
                marginTop:20,
            }}>
                <View  style={{marginTop:15, flexDirection:"row"}}>
               <Text style={{marginLeft:10 }}>Add more</Text>
               <Image
                 source={icons.plusIcon}  
                 style={{ tintColor:COLORS.primary,marginLeft:15,marginTop:3}}            />
               </View>
            </TouchableOpacity>
        )
      }

    return (
        <SafeAreaView
            style={{
                paddingHorizontal: SIZES.font,
                marginTop: Platform.OS == "android" ? 20 : 8,
            }}
        >
            <ScrollView>
            {/* Header */}
            {renderHeader()}
            
            {/* Your Order */}
            {renderYourOrder()}

            {/* Cart List */}
            {renderCartList()}
             
            {/* Bill Details */}
            {renderBilldetails()}

            {/* Footer  */}
            {renderBillsTotal()}
            {renderAddMore()}

            <TextButton
        label="Check Out"
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
       onPress={() => navigation.navigate("CheckOut1")}
      />       
            </ScrollView>
        </SafeAreaView>
      )
    }


export default Cart;