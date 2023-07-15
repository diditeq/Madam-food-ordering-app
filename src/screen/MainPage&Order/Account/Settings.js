import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, icons, constants} from '../../../constants';
import { Header, TextButton, IconButton, RightArrow} from "../../../assets/components";



const Settings  = ( {navigation} ) => {

    function renderHeader(){
        return(
            <Header
                title="Settings"
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
                       onPress={() => navigation.goBack("HomePage")}
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
    const Line = () => {
        return <View style={styles.line} />;
      };
      

      renderList = () => {
        return (
          <View
              style={{
                  flexDirection: "row",
                  height: 50,
              }}
          >
      <TouchableOpacity style={styles.container1}>
    <View style={styles.row}>
      <Image
        source={icons.currencyIcon}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
    <View style={styles.row}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          paddingHorizontal: SIZES.padding,
          textAlign: "center",
        }}
      >
      Currency Preference
      </Text>
    </View>
    <TouchableOpacity style={styles.row2}>
      <Image
         source={icons.rightArrow}
         style={{left: 80, justifyContent: "center", tintColor: COLORS.primary, marginVertical: 12, }} 
      />
    </TouchableOpacity>
    </TouchableOpacity>

    </View>
    )}

    const Line1 = () => {
        return <View style={styles.line1} />;
      };

    renderList2 = () => {
        return (
          <View
              style={{
                  flexDirection: "row",
                  height: 50,
              }}
          >
      <TouchableOpacity style={styles.container1}>
    <View style={styles.row}>
      <Image
        source={icons.globeIcon}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
    <View style={styles.row}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          paddingHorizontal: SIZES.padding,
          textAlign: "center",
        }}
      >
      Language Preference
      </Text>
    </View>
    <TouchableOpacity style={styles.row2}>
      <Image
         source={icons.rightArrow}
         style={{left: 75, justifyContent: "center", tintColor: COLORS.primary, marginVertical: 12, }} 
      />
    </TouchableOpacity>
    </TouchableOpacity>

    </View>

    )}


    renderList3 = () => {
        return (
          <View
              style={{
                  flexDirection: "row",
                  height: 50,
              }}
          >
      <TouchableOpacity style={styles.container1}
        onPress={() => navigation.navigate("Notification")}
      >
    <View style={styles.row}>
      <Image
        source={icons.notificationIcon}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </View>
    <View style={styles.row}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          paddingHorizontal: SIZES.padding,
          textAlign: "center",
        }}
      >
      Notification Setting
      </Text>
    </View>
    <TouchableOpacity style={styles.row2}>
      <Image
         source={icons.rightArrow}
         style={{left: 90, justifyContent: "center", tintColor: COLORS.primary, marginVertical: 12, }} 
      />
    </TouchableOpacity>
    </TouchableOpacity>

    </View>
 )}
      
    return (
    <SafeAreaView
        style={{
            paddingHorizontal: SIZES.font,
        }}
    >
        {/* Header */}
        {renderHeader()}
        {/* Body */}
        <Line style={styles.container}/>
        { renderList()}
        <Line1 style={styles.container}/>
        <Line1 style={styles.container}/>
        { renderList2()}
        <Line1 style={styles.container}/>
        <Line1 style={styles.container}/>
        { renderList3()}
        <Line1 style={styles.container}/>
   
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
    container1: {
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.radius,
      },
      row: {
        justifyContent: "center",
      },
  
      row2: {
          alignSelf: "flex-end",
          justifyContent: "center"
        },
    line1: {
         width: '100%',
         height: 1,
         backgroundColor: 'gray',
         marginTop: 8        },
  });

  
export default Settings;