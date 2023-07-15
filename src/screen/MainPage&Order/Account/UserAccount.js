import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet,  FlatList, Alert} from 'react-native';
import { FONTS, SIZES, COLORS, icons, constants} from '../../../constants';
import { Header, TextButton, IconButton, RightArrow, Button} from "../../../assets/components";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import Onboarding from 'react-native-onboarding-swiper';

const UserAccount  = ( {navigation} ) => {



  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = () => {

   navigation.navigate('Onboarding')

    // Prepare the signup data object

    // // Make the API request
    // axios.post('https://staging-madam-food.onrender.com/logout')
    //   .then(response => {
    //     // Handle the success response
    //     console.log('Are you sure you want to log out?');
    //     Alert.alert('Are you sure you want to log out?');
    //     // You can navigate to the next screen or perform any other actions here
    //     navigation.navigate('Onboarding');
    //   })
    //   .catch(error => {
    //     // Handle the error response
    //     console.log(' failed', );
    //     Alert.alert(" failed");
        // Display an error message to the user or handle the error in some way
      // });
  };


    function renderHeader(){
        return(
            <Header
                title="My Account"
                titleStyle={{fontSize: 18,  marginBottom:-12,}}
                containerStyle={{
                    height: 70,
                    paddingVertical: SIZES.base,
                    paddingHorizontal: SIZES.font,
                    marginTop: 50,
                    backgroundColor: COLORS.lightGray2,
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: SIZES.base,
                    borderWidth: 2,
                    borderColor: COLORS.primary
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

    function renderProfileinfo(){
        return(
            <View
                style={{
                    flexDirection: "row",
                    height: 80,
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: "center",
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.white,
                }}
            >
                <Image
                    source={icons.profilepics}
                    style={{
                        height: 60,
                        width:60
                    }}
                />
                {/* Info */}
                <View
                    style={{
                        flex:1,
                        marginLeft: SIZES.font,
                        justifyContent: "center"
                    }}
                >
                    <Text style={{...FONTS.body3, color: COLORS.primary}}>Amarachi Nnadozie</Text>
                    <Text style={{...FONTS.h4}}>+234 56779023</Text>
                </View>
                {/* RightArrow */}
                <RightArrow
                    rightArrow={1}
                    iconStyle={{
                        marginRight: 60
                    }}
                    //  onPress={() => navigation.navigate("Profile")}
                />
            </View>
        )
        }
//Profile Layout 
 renderListItem1 = () => {
  return (
    <View
        style={{
            flexDirection: "row",
            height: 145,
            borderRadius: SIZES.radius,
            borderWidth: 2,
            borderColor: COLORS.primary,
            backgroundColor: COLORS.white,
        }}
    >
    <View>
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          source={icons.greenbox}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: SIZES.padding,
            textAlign: "center",
          }}
        >
         Profile
        </Text>
      </View>
      <TouchableOpacity style={styles.row2}>
        <Image
           source={icons.rightArrow}
           style={{left: 200, justifyContent: "center", flexDirection: "row", marginVertical: SIZES.radius,}} 
        />
      </TouchableOpacity>

      
    </TouchableOpacity>

    <View>
        <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          source={icons.greenbox}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: SIZES.padding,
            textAlign: "center",
          }}
        >
        Order History
        </Text>
      </View>
      <TouchableOpacity style={styles.row2}>
        <Image
           source={icons.rightArrow}
           style={{left: 150, justifyContent: "center", marginVertical: SIZES.radius, }} 
        />
      </TouchableOpacity>

      
    </TouchableOpacity>

    <View>
        <TouchableOpacity style={styles.container}
           onPress={() => navigation.navigate("CheckOut1")}
        >
      <View style={styles.row}>
        <Image
          source={icons.greenbox}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: SIZES.padding,
            textAlign: "center",
          }}
        >
        Payment Method
        </Text>
      </View>
      <TouchableOpacity style={styles.row2}>
        <Image
           source={icons.rightArrow}
           style={{left: 125, justifyContent: "center", marginVertical: SIZES.radius,}} 
        />
      </TouchableOpacity>

      
    </TouchableOpacity>

    </View>

    <View>
        <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          source={icons.greenbox}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </View>
      <View style={styles.row}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            paddingHorizontal: SIZES.padding,
            textAlign: "center",
          }}
        >
        Saved References
        </Text>
      </View>
      <TouchableOpacity style={styles.row2}>
        <Image
           source={icons.rightArrow}
           style={{left: 120, justifyContent: "center",marginVertical: SIZES.radius }} 
        />
      </TouchableOpacity>

      
    </TouchableOpacity>

    </View>

    </View>
    </View>
    </View>
  );
};
 
//Settings Layout 
renderListItem2 = () => {
    return (
      <View
          style={{
              flexDirection: "row",
              height: 175,
              marginVertical: SIZES.padding,
              borderRadius: SIZES.radius,
              borderWidth: 2,
              borderColor: COLORS.primary,
              backgroundColor: COLORS.white,
          }}
      >
      <View>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate("Notification")}
      >
        <View style={styles.row}>
          <Image
            source={icons.greenbox}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: SIZES.padding,
              textAlign: "center",
            }}
          >
           Notification
          </Text>
        </View>
        <TouchableOpacity style={styles.row2}>
          <Image
             source={icons.rightArrow}
             style={{left: 165, justifyContent: "center", flexDirection: "row", marginVertical: SIZES.radius,}} 
          />
        </TouchableOpacity>
  
        
      </TouchableOpacity>
  
      <View>
          <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
          <Image
            source={icons.greenbox}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: SIZES.padding,
              textAlign: "center",
            }}
          >
          Language
          </Text>
        </View>
        <TouchableOpacity style={styles.row2}>
          <Image
             source={icons.rightArrow}
             style={{left: 180, justifyContent: "center", marginVertical: SIZES.radius, }} 
          />
        </TouchableOpacity>
  
        
      </TouchableOpacity>
  
      <View>
          <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
          <Image
            source={icons.greenbox}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: SIZES.padding,
              textAlign: "center",
            }}
          >
          Invite Friends
          </Text>
        </View>
        <TouchableOpacity style={styles.row2}>
          <Image
             source={icons.rightArrow}
             style={{left: 154, justifyContent: "center", marginVertical: SIZES.radius,}} 
          />
        </TouchableOpacity>
      </TouchableOpacity>
      </View>
  
      <View>
          <TouchableOpacity style={styles.container}
           onPress={() => navigation.navigate("Settings")}
          >
        <View style={styles.row}>
          <Image
            source={icons.greenbox}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: SIZES.padding,
              textAlign: "center",
            }}
          >
          Settings
          </Text>
        </View>
        <TouchableOpacity style={styles.row2}>
          <Image
             source={icons.rightArrow}
             style={{left: 190, justifyContent: "center",marginVertical: SIZES.radius }} 
          />
        </TouchableOpacity>
      </TouchableOpacity>
  
      </View>
      <View>
          <TouchableOpacity style={styles.container}>
        <View style={styles.row}>
          <Image
            source={icons.greenbox}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: SIZES.padding,
              textAlign: "center",
            }}
          >
          Help and Support
          </Text>
        </View>
        <TouchableOpacity style={styles.row2}>
          <Image
             source={icons.rightArrow}
             style={{left: 125, justifyContent: "center", marginVertical: SIZES.radius,}} 
          />
        </TouchableOpacity>
  
        
      </TouchableOpacity>
  
      </View>
      </View>
      </View>
      </View>
    );
  };

    return (
        <SafeAreaView
            style={{
                paddingHorizontal: SIZES.font,
            }}
        >
           <ScrollView>
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            {renderProfileinfo()}
            {renderListItem1 ()}
            {renderListItem2 ()}

            {/* Footer  */}

         <View>

        {/* LogOut Button */}
      <Button
        title="Log Out"
        titleStyle={{
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
        onPress={handleLogOut}
                isLoading={isLoading}
      //  onPress={() => navigation.navigate("OtpRecoverPass")}
      />       
      
     </View>

     <View>

        {/* Delete Account Button */}
      <TextButton
        label="Delete Account"
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
       // onPress={() => navigation.navigate("OtpRecoverPass")}
      />       
      
            </View>
            </ScrollView>
        </SafeAreaView>
      )
}

const styles = StyleSheet.create({
    container: {
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
  });


  


export default UserAccount;
