import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, icons, constants} from '../../../constants';
import { Header, TextButton, IconButton, RightArrow} from "../../../assets/components";
import { ScrollView } from 'react-native-gesture-handler';



const Notification  = ( {navigation} ) => {

    function renderHeader(){
        return(
            <Header
                title="Notification"
                titleStyle={{ marginBottom:-12, justifyContent: 'center', fontSize: 20, color: COLORS.primary}}
                containerStyle={{
                    height: 70,
                    paddingVertical: SIZES.base,
                    paddingHorizontal: SIZES.font,
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

    // Today Items
 renderTodayItems1=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.checkcircle}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Order Confirmation</Text>
                    <Text style={{fontSize:14}}>Your order is confirmed</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }

   renderTodayItems2=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.clock}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
           
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Status Update</Text>
                    <Text style={{fontSize:14}}>Track your order</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }


   renderTodayItems3=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.briefcase}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
           
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Orders</Text>
                    <Text style={{fontSize:14}}>Your order has been delivered</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }

   renderTodayItems4=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.award}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
           
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Promotion Deals</Text>
                    <Text style={{fontSize:14}}>May offers 45% off</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }

// Yesterday Items
renderYesterdayItems1=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.checkcircle}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
           
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Order Confirmation</Text>
                    <Text style={{fontSize:14}}>Your order is confirmed</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }

   renderYesterdayItems2=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.clock}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Status Update</Text>
                    <Text style={{fontSize:14}}>Track your order</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }


   renderYesterdayItems3=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.briefcase}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Orders</Text>
                    <Text style={{fontSize:14}}>Your order has been delivered</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }

   renderYesterdayItems4=() => {
    return(
        <View
        style={{
            flexDirection: "row",
            marginVertical: SIZES.padding,
            borderRadius: SIZES.radius,
            alignItems: "center",
        }}
    >       
          <View style={{
            padding: 13,
            borderWidth:2,
            borderRadius: 5,
            left:-6,
            borderColor: COLORS.gray2
          }}>
            <Image
              source={icons.award}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{
            width:270,
            borderWidth:2,
            borderRadius: 5,
            borderColor: COLORS.gray2,
            alignItems: "flex-start",
            left:1,
            padding: 5
          }}>
                    <Text style={{fontSize:16, color: COLORS.primary}}>Promotion Deals</Text>
                    <Text style={{fontSize:14}}>May offers 35% off</Text>
                
                {/* RightArrow */}
                </View>
                <Image
                 source={icons.rightArrow}
                 style={{left: -20, justifyContent: "center", tintColor: COLORS.primary,}} 
                />
                </View>             
    )
   }

    return (
      <ScrollView>
        <SafeAreaView
            style={{
                paddingHorizontal:  SIZES.font,
            }}
        >   

            {/* Header */}
            {renderHeader()}
            
            {/* Body */}
            <View style={{marginTop: 1, color:COLORS.primary}}>
                <Text style={{color:COLORS.primary}}>Today</Text>
            </View>
        
            {renderTodayItems1()}
            {renderTodayItems2()}
            {renderTodayItems3()}
            {renderTodayItems4()}
            <View style={{marginTop: 1, color:COLORS.primary}}>
                <Text style={{color:COLORS.primary}}>Yesterday</Text>
            </View>
            {renderYesterdayItems1()}
            {renderYesterdayItems2()}
            {renderYesterdayItems3()}
            {renderYesterdayItems4()}
          
        </SafeAreaView>
        </ScrollView>
      )
    }

        
export default Notification;