import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView, 
} from 'react-native';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { SafeAreaView } from 'react-native-web';


// const handleOrder = () => {
//     // Handle the order placement logic here
//     // Navigate to the Menu screen with the selected item's ID
//     navigation.navigate(Cart, { itemId: item.id});
//   };

const Header = ({
    containerStyle, title, titleStyle, leftComponent, rightComponent
    }) => {
        return (
            <View 
                style={{height:60, flexDirection:'row', ...containerStyle,}}
            >
                {
                    leftComponent
                }
                <View
                    style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text style={{fontSize: 24, ...titleStyle}}>
                        {title}
                    </Text>
                </View>
                {
                    rightComponent
                }
            </View>
        );
};

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
    return (
        <TouchableOpacity
            style={{...containerStyle}} onPress={onPress}
        >
            <Image
                source={{uri: 'https://img.icons8.com/?size=512&id=PXS7hSwrozS5&format=png'}}
                style={{width:30, height:30, ...iconStyle}}
            />
        </TouchableOpacity>
    );
};
const Menu = ({ route }) => {
    const navigation = useNavigation();
    const handleAddToCart = () => {
        // Perform any necessary logic before navigating to the cart screen
        // For example, you can add the selected item to the cart state or perform an API call
    
        // Navigate to the cart screen
        navigation.navigate('Cart');
      };
    
    const { itemId, offers } = route.params || {}; // Add the conditional check and provide a default empty object
    console.log('itemId:', itemId); // Check the value of ItemId
    console.log('offers:', offers)
    console.log('Benedicta', route)
    const [quantity, setQuantity] = useState(1);
    const [quantitySalad, setQuantitySalad] = useState(1);
    const [quantityMeat, setQuantityMeat] = useState(1);
    const [quantityVeggies, setQuantityVeggies] = useState(1);

    function renderHeader(){
        return(

            <Header
                title="Menu"
                titleStyle={{ justifyContent: 'center', fontSize: 24, fontWeight: 'bold', color: '#1d8129'}}
                containerStyle={{
                    height: 60,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    marginHorizontal: 5,
                    marginTop: 25,
                    backgroundColor: '#E4F0E8',
                    borderWidth: 0.5,
                    borderColor: '#1d8129',
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 10,
                }}
                leftComponent={
                    <IconButton
                        icon= 'https://img.icons8.com/?size=512&id=PXS7hSwrozS5&format=png'
                        containerStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                            //margin: 15
                        }}
                        iconStyle={{
                            width: 40,
                            height: 40,
                            tintColor: '#000000'
                        }}
                       onPress={() => navigation.navigate('Home')}
                    />
                }
                rightComponent={
                    <TouchableOpacity
                        style={{backgroundColor:'#1d8129',height:40, width:40, borderRadius:100}}
                        onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={{color: '#fff', fontSize:24, fontWeight: 'bold', textAlign: 'center'}}>
                                A
                            </Text>
                        </TouchableOpacity>
                }
            />
        );
    };
    
    if (offers) {
        const selectedItem = offers.find((item) => item.id === itemId);
        if (selectedItem) {
            return (

                <View style={{
                    paddingHorizontal: 10,
                    marginTop: Platform.OS == "android" ? 15 : 8,
                }}>
                <ScrollView style={{backgroundColor: '#fff', margin:2, padding:2,}}>
                    {/* HEADER */}
                    {renderHeader()}
                    <View >
                            {/* FOODIMAGE AND LIKE ICON */}
                            <Image source={{ uri: selectedItem.image }} 
                                style={{ width: 400, height: 150, aspectRatio:2.7, top:10, marginHorizontal:5,  }}
                                //style={[styles.foodImage, { height: calculateImageHeight('75%') }]}
                            />
                            <TouchableOpacity>
                                <Image source={{ uri: selectedItem.like }} 
                                    style={{ width: 50, height: 50, tintColor: '#000000',
                                    bottom:140, left:350, }}
                                    resizeMode='cover' 
                                />
                            </TouchableOpacity>
                        </View>
                        {/* REVIEW AND RATING */}
                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'baseline'}}>
                            <View style={{flexDirection: 'column', left: 250, bottom:30,}}>
                                <View style={{flexDirection: 'row', left: 25,}}>
                                    <Image source={{uri: selectedItem.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                                    <Image source={{uri: selectedItem.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                                    <Image source={{uri: selectedItem.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
                                    <Image source={{uri: selectedItem.noRating}} style={{width: 15, height:15, }}/>
                                    <Image source={{uri: selectedItem.noRating}} style={{width: 15, height:15, }}/>
                                </View>
                                    <Text>
                                        {selectedItem.review}
                                    </Text> 
                            </View>    

                            {/* FOOD DETAILS  */}

                            <View style={{flexDirection:'column', marginTop:-28, marginLeft:-24, }}>
                                <Text style={{color:'#1d8129', fontSize: 20, fontWeight:'600'}}>
                                    {selectedItem.type}
                                </Text>
                                <Text style={{fontSize:16, fontWeight: '700',}}>
                                    {selectedItem.place}
                                </Text>
                                <Text style={{fontSize:16, fontWeight: '900', margin:5,}}>
                                    {selectedItem.price}
                                </Text>
                                {/* COUNTER */}
                            <View style={styles.counterContainer}>
                                <TouchableOpacity
                                    onPress={() =>{
                                        if (quantity === 1) 
                                        {
                                            return;
                                        } else 
                                        {
                                            setQuantity(quantity-1)
                                        }
                                        }}
                                >
                                    <Text style={styles.counterText}>-</Text>
                                </TouchableOpacity>
                               
                                    <Text style={styles.counterText1}>
                                        {quantity}
                                    </Text>
                                <TouchableOpacity 
                                    onPress={() =>{
                                        setQuantity(quantity+1)
                                        }}
                                    style={styles.counterButton}
                                >
                                    <Text style={styles.counterText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        {/* <Button title="Place Order" onPress={() => console.log('Place Order clicked')} /> */}
                                <Text style={styles.description}>
                                    {selectedItem.describe}
                                </Text>
                                <View style={{ paddingRight:10,marginRight:15,}}>
                                 <Text  style={styles.descriptionText}>
                                    {selectedItem.description}
                                 </Text>
                                 <Text style={styles.ingredients}>
                                    {selectedItem.main}
                                    <Text style={styles.ingredientsText}>
                                    {selectedItem.ingredients}
                                 </Text>
                                 </Text>
                                 
                                </View>
                            </View>
                        </View>
                        <Text style={styles.customize}>Customize your order</Text>
                            <View style={styles.customizeOptions}>
                                <Text style={styles.option}>Extra meat</Text>
                                <Text style={styles.optionPrice}>$4.00</Text>
                                <View style={styles.counterContainer}>
                                <TouchableOpacity
                                    onPress={() =>{
                                        if (quantityMeat === 1) 
                                        {
                                            return;
                                        } else 
                                        {
                                            setQuantityMeat(quantityMeat -1)
                                        }
                                        }}
                                >
                                    <Text style={styles.counterText}>-</Text>
                                </TouchableOpacity>
                               
                                    <Text style={styles.counterText1}>
                                        {quantityMeat}
                                    </Text>
                                <TouchableOpacity 
                                    onPress={() =>{
                                        setQuantityMeat(quantityMeat+1)
                                        }}
                                    style={styles.counterButton}
                                >
                                    <Text style={styles.counterText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            <View style={styles.customizeOptions}>
                                <Text style={styles.option}>Extra Salad</Text>
                                <Text style={styles.optionPrice}>$4.00</Text>
                                <View style={styles.counterContainer}>
                                <TouchableOpacity
                                    onPress={() =>{
                                        if (quantitySalad === 1) 
                                        {
                                            return;
                                        } else 
                                        {
                                            setQuantitySalad(quantitySalad-1)
                                        }
                                        }}
                                >
                                    <Text style={styles.counterText}>-</Text>
                                </TouchableOpacity>
                               
                                    <Text style={styles.counterText1}>
                                        {quantitySalad}
                                    </Text>
                                <TouchableOpacity 
                                    onPress={() =>{
                                        setQuantitySalad(quantitySalad+1)
                                        }}
                                    style={styles.counterButton}
                                >
                                    <Text style={styles.counterText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            <View style={styles.customizeOptions}>
                                <Text style={styles.option}>Extra Veggies</Text>
                                <Text style={styles.optionPrice}>$4.00</Text>
                                <View style={styles.counterContainer}>
                                <TouchableOpacity
                                    onPress={() =>{
                                        if (quantityVeggies === 1) 
                                        {
                                            return;
                                        } else 
                                        {
                                            setQuantityVeggies(quantityVeggies-1)
                                        }
                                        }}
                                >
                                    <Text style={styles.counterText}>-</Text>
                                </TouchableOpacity>
                               
                                    <Text style={styles.counterText1}>
                                        {quantityVeggies}
                                    </Text>
                                <TouchableOpacity 
                                    onPress={() =>{
                                        setQuantityVeggies(quantityVeggies+1)
                                        }}
                                    style={styles.counterButton}
                                >
                                    <Text style={styles.counterText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
        
                    {/* DETAILS */}
                    {/*                     
                    <View style={{}}>
                        <Button 
                            title='-'
                            style={styles.button}
                            onPress={() =>{
                                if (quantity === 1) 
                                {
                                    return;
                                } else 
                                {
                                    setQuantity(quantity-1)
                                }
                                }}
                        />
                        <Text>
                            {quantity}
                        </Text>
                        <Button title='+' onPress={() =>{
                            setQuantity(quantity+1)
                            }}
                        />
                    </View> */}
                    {/* Customize More Button */}
                        <TouchableOpacity style={styles.customizeMoreButton}>
                        <Text style={styles.customizeMoreButtonText}>Customize More</Text>
                        </TouchableOpacity>

                        {/* Total Price */}
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.totalPrice}>Total price</Text>
                            <Text style={styles.priceAmount}>$15.00</Text>

                        </View>
                         {/* Add to Cart Button */}
                        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                      
            </ScrollView>
            </View>
            );
          };
          return (
            <View>
              <Text>Item not found.</Text>
            </View>
          );
        };
        }

        const styles = StyleSheet.create({
            button: {
            width: 100,
            height: 50,
            backgroundColor: '#1d8129',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        foodImage: {
            width: '80%',
            resizeMode: 'cover',
        },
        counterContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 1,
            marginRight: 1,
          },
          counterButtona: {
            backgroundColor: '#1d8129',
            borderRadius: 2,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 5,
            marginTop:5,
          },
          counterText: {
            color: 'white',
            fontSize: 30,
            backgroundColor: '#1d8129',
            borderRadius: 20,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginRight: 5,
          },
          counterText1: {
            color: 'white',
            fontSize: 20,
            backgroundColor: '#1d8129',
            borderRadius: 10,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding:5,
            marginRight: 5,
          },
          description: {
            marginTop: 1,
            marginBottom: 8,
            fontSize: 18,
            color: '#1d8129',
            fontWeight: 'bold',
          },
          descriptionText: {
            //width:'100%',
            marginBottom: 15,
            fontSize: 14,
            color: 'black',
           
            flexWrap: 'wrap',
          },
          ingredients: {
            marginBottom: 8,
            fontSize: 16,
            color: '#1d8129',
            fontWeight: '800',
          },
          ingredientsText: {
            marginBottom: 15,
            fontSize: 14,
            fontWeight: '400',
            color: 'black',
           
          },
          customize: {
            marginTop: 16,
            marginBottom: 8,
            fontSize: 18,
            color: '#1d8129',
            fontWeight: 'bold',
          },
          customizeOptions: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          },
          option: {
            flex: 1,
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
          },
          optionPrice: {
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            marginRight: 8,
          },
          customizeMoreButton: {
            marginTop: 1,
            marginBottom: 8,
            paddingVertical: 10,
            paddingHorizontal: 10,
            width:150,
            borderWidth: 1,
            borderColor: '#1d8129',
            borderRadius: 4,
          },
          customizeMoreButtonText: {
            fontSize: 16,
            color: '#1d8129',
            fontWeight: 'bold',
          },
          totalPrice: {
            marginTop: 16,
            marginBottom: 8,
            fontSize: 18,
            color: '#1d8129',
            fontWeight: 'bold',
          },
          priceAmount: {
            marginBottom: 16,
            fontSize: 16,
            color: 'black',
            fontWeight:'700'
          },
          addToCartButton: {
            backgroundColor: '#1d8129',
            borderRadius: 4,
            alignItems: 'center',
            paddingVertical: 12,
            width:150,
            height:60,
          },
          addToCartButtonText: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
          },
        })
        
export default Menu;
 