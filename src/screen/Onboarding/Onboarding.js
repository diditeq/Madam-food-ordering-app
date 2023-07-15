import React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, Image, Animated, ImageBackground} from 'react-native';
import {constants, FONTS, SIZES, COLORS } from "../../constants";
import { TextButton } from "../../assets/components";


const Onboarding = ({ navigation}) => {

 

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef =React.useRef()

  const [currentIndex, setCurrentIndex] = React.useState(0)

 

  const onViewChangeRef = React.useRef(({ viewableItems, changed}) =>{
      setCurrentIndex(viewableItems[0].index)
  })

  

  const Dots =() => {
    const dotPosition = Animated.divide(scrollX, SIZES.width)
    return(
      <View
        style={{
          flexDirection: 'row',
          alignItems : 'center',
          justifyContent: 'center'
        }}
      >
        {
          constants.onboardingScreens.map((item, index) => {
            const dotColor = dotPosition.interpolate({
              inputRange: [ index-1, index, index +1],
              outputRange: [ COLORS.gray, COLORS.green, COLORS.gray],
              extrapolate: "clamp"
            })

            const dotWidth =  dotPosition.interpolate({
              inputRange: [ index-1, index, index +1],
              outputRange: [10, 10, 10],
              extrapolate: "clamp"
            })

            return (
              <Animated.View
                key={`dot-${index}`}
                style={{
                  borderRadius: 30,
                  marginHorizontal: 6,
                  width: dotWidth,
                  height: 10,
                  backgroundColor: dotColor
                }}
              />
            )
          })
        }
      </View>
    )
  }
  function renderFooter() {
    return(
      <View
        style={{
          height: 120
        }}
      >
        {/* Pagination / Dots */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            }}
        >

        </View>

        {/* Buttons */}
        {currentIndex < constants.onboardingScreens.length -1 &&
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{
                backgroundColor: COLORS.white
              }}
              labelStyle={{
                color: COLORS.primary
              }}
             onPress={() => navigation.replace("SignIn")}
            />

            <TextButton
              label="Next"
              labelStyle={{
                color: COLORS.primary,
                backgroundColor: COLORS.white
              }}
              buttonContainerStyle={{
                backgroundColor: 'white',
                height: 40,
                width: 70,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 5,       
              }}
              onPress={() => {

                  flatListRef?.current?.scrollToIndex({
                    index: currentIndex + 1,
                    animated: true
                  })
           }}
        />
     </View>
  }
  {currentIndex == constants.onboardingScreens.length -1 &&
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
        justifyContent: 'center',
        alignItems : 'center',
      }}
    >
      <TextButton
        label="Get Started"
        labelStyle={{
          color: COLORS.primary,
          backgroundColor: COLORS.white
        }}
        buttonContainerStyle={{
          height: 60,
          width: 150,
          backgroundColor: 'white',
          height: 50,
          borderWidth: 2,
          borderColor: COLORS.primary,
          borderRadius: SIZES.radius
        }}
        onPress={() => navigation.replace("SignIn")}
      />

    </View>
  }
      </View>
    )
  }
      return (
      <View
          style={{
              flex: 1,
              backgroundColor: COLORS.white
             
          }}
      >
     
          <Animated.FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={ constants.onboardingScreens }
            scrollEventThrottle={16}
            snapToAlignment= "center"
            showsHorizontalScrollIndicator ={false}
            onScroll={Animated.event(
              [
                { nativeEvent: { contentOffset:{ x: scrollX} } }
              ],
              { useNativeDriver: false}
              )}
              onViewableItemsChanged={onViewChangeRef.current}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => {
              return(
                <View
                style={{
                  width: SIZES.width
                }}
             >
                {/* Header */}
                <View
                  style={{flex: 3}}
                >
                  <ImageBackground
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-end",
                      height: index == 1 ? "76%" : "100%",
                      width: "100%"
                    }}
                >
                    <Image
                      source={item.bannerImage}
                      resizeMode='contain'
                      style={{
                        width: SIZES.width * 0.8,
                        height: SIZES.width * 0.8,
                        marginBottom: -SIZES.padding
                      }}
                    />

                  </ImageBackground>
                </View>
                      
                 {/* Detail */}
                 <View
                    style={{
                      flex: 1,
                      marginTop: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: SIZES.radius
                    }}
                 >
                    <Text style={{
                            ...FONTS.h1,
                            fontSize: 20,
                            marginTop: SIZES.radius,
                            color:COLORS.primary 
                          }}
                    >
                           {item.title}
                    </Text>
                    <Text 
                      style={{
                        marginTop: SIZES.radius,
                        textAlign: 'center',
                        paddingHorizontal: SIZES.padding,
                        ...FONTS.body3,
                        color: COLORS.green 
                      }}
                    >
                      {item.description}
                    </Text>

                 </View>
                </View>
              )
            }}
          />

          {renderFooter()}
      </View>
  )
}
export default Onboarding;
