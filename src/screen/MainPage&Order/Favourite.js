import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet , ScrollView} from 'react-native';
import { FONTS, SIZES, COLORS, icons } from '../../../src/constants';
import { Header, TextButton, IconButton, RightArrow, StepperInput, Schedule } from "../../../src/assets/components";
import {billsDetails, billsTotal} from "../../SourceData/ExternalData";
import Icon from 'react-native-vector-icons/FontAwesome';
import {food} from "../../../src/assets/dummyData";

import {SwipeListView} from 'react-native-swipe-list-view';




const Favourite= ({navigation} ) => {  
    const [myFavList, setMyFavList] = React.useState(food.myFav)
    
    //Handler
    
    function renderHeader(){
        return(
            <Header
                title="Favourite"
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
                       onPress={() => navigation.goBack("Categories")}
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

    function renderFavList(){
        return (
            <SwipeListView/>
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
           
            {/* Fav List */}
            {renderFavList()}
             
            {/* Bill Details */}
     

            {/* Footer  */}
        
          
            </ScrollView>
        </SafeAreaView>
      )
    }
   

export default Favourite;