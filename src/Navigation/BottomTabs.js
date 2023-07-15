import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import HomePage from "../screen/MainPage&Order/HomePage";
import Favourite from "../screen/MainPage&Order/Favourite";
import Cart from "../screen/MainPage&Order/Cart";
import Categories from "../screen/MainPage&Order/Categories";
import  UserAccount  from "../screen/MainPage&Order/Account/UserAccount";
import { COLORS, icons } from "../constants";



const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Categories') {
              iconName = focused ? Platform.select({ ios: 'ios-grid', android: 'md-grid' }) : Platform.select({ ios: 'ios-grid-outline', android: 'md-grid-outline' });
            } else if (route.name === 'Favourite') {
              iconName = focused ? Platform.select({ ios: 'ios-heart', android: 'md-heart' }) : Platform.select({ ios: 'ios-heart-outline', android: 'md-heart-outline' });
            } else if (route.name === 'Cart') {
              iconName = focused ? Platform.select({ ios: 'ios-cart', android: 'md-cart' }) : Platform.select({ ios: 'ios-cart-outline', android: 'md-cart-outline' });
            } else if (route.name === 'Account') {
              iconName = focused ? Platform.select({ ios: 'ios-person', android: 'md-person' }) : Platform.select({ ios: 'ios-person-outline', android: 'md-person-outline' });
            }
      
            if (iconName === 'home') {
              return <AntDesign name="home" size={size} color={color} />;
            } else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          // tabBarActiveTintColor: '#1d8129', borderRadius: 12, tabBarActiveBackgroundColor: '#1d8129',
          // tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#013220', // Set the active (selected) tab text color to green
          tabBarInactiveTintColor: 'black', // Set the inactive (unselected) tab text color to black
          tabBarActiveBackgroundColor: '#1d8129', // Set the active (selected) tab background color to lightgreen
          tabBarInactiveBackgroundColor: 'white', // Set the inactive (unselected) tab background color to white
          tabBarLabelStyle: { fontSize: 12 }, // Set the font size for tab labels
          tabBarStyle: {
            height: 50,
         
            borderRadius: 15, // Set the border radius for the tabBar
            marginHorizontal: 5, // Set the horizontal margin for the tabBar
          },
        })}
        
      >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.home}
                  style={{
                    width: 25,
                    height: 25,
                    color: COLORS.black
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.category}
                  style={{
                    width: 25,
                    height: 25,
                    color: COLORS.black
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.heart}
                  style={{
                    width: 27,
                    height: 25,
                    color: COLORS.black
                  }}
                />
              </View>
            );
          },
        }}
      />
       <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.shoppingCart}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.black
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserAccount}
        options={{
          tabBarBadge: 3, header: () => null,
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.accnt}
                  style={{
                    width: 25,
                    height: 25,
                   tintColor: COLORS.black
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
