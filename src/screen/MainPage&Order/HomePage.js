//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {useState, useRoute} from 'react';
import {SafeAreaView, Platform, StyleSheet, Image, Text, View, ScrollView, TextInput, SectionList, TouchableOpacity, onPress, FlatList, Alert } from 'react-native';
import { icons, SIZES, COLORS, FONTS } from '../../constants';
import {addedKitchen, localKitchen, favouriteKitchen} from "..//../SourceData/ExternalData"
import { TextButton, IconButton, FilterModal} from "../../../src/assets/components";
import axios from 'axios';

const categories = [
  {id: 1, name: 'Rice'},
  {id: 2, name: 'Sea Food'},
  {id: 3, name: 'Fish'},
  {id: 4, name: 'Pepper Soup'},
  {id: 5, name: 'Vegetable Soup'},
  {id: 6, name: 'Smoothie'},
];

const handlePress = (item) => {
  console.log('Pressed category', item);
};

const renderCategory = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(item)} 
        style={{borderWidth:2, borderColor: COLORS.lightGray1, borderRadius: 10,
         margin: 5, padding: 5, marginTop:-3,  marginBottom:-5}}>
      <Text style={{color: '#1d8129', fontSize:16, fontWeight:"800"}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};


const offers = [
  {
    id: 1,
    image: 'https://nkechiajaeroh.com/wp-content/uploads/2020/12/Nigerian-fried-rice-recipe-photo-3.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png', 
    place: 'Genesis',
    type: 'Fried Rice',
    price: '$12.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Fried Rice is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
    
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/b2/d5/0c/b2d50c4b7213a42ef4ca43f49dc78480.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Jumia',
    type: 'Jellof Rice',
    price: '$15.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Jellof Rice is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
  {
    id: 3,
    image: 'https://farmhouzng.com/wp-content/uploads/2021/12/boiled-yam-with-egg-sauce.png',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Genesis',
    type: 'Boiled Yam',
    price: '$12.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Boiled Yam is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
  {
    id: 4,
    image: 'https://i.ytimg.com/vi/y-xNqPnMaYg/maxresdefault.jpg',
    rating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    noRating: 'https://pic.onlinewebfonts.com/svg/img_530227.png',
    place: 'Crunches',
    type: 'Soup',
    price: '$16.00',
    review: "See All Reviews",
    describe: "Description",
    description: "Soup is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, onions, spices, vegetables and meat in a single pot, although its ingredients and preparation methods vary across different regions",
    main: "Main ingredients:",
    ingredients: "Rice, tomatoes and tomato paste, onions, cooking oil, fish, lamb, goat meat, chicken, or beef",
    like: 'https://img.icons8.com/?size=512&id=86721&format=png' ,
  },
];

// {/* WHEN THE IMAGE IS CLICKED ON TO LEAD TO THE MENU PAGE */}
const renderOffers =({ item, navigation }) => {
  //const navigation = useNavigation();
  const handleOffers = (id) => {
    console.log('Pressed offers', item);
    // Navigate to the Menu screen with the selected item's ID
    //navigation.navigate('Menu', { itemId: item.id });
    //navigation.navigate(Menu, { itemId: item.id});
    navigation.navigate("Menu", { itemId:id, offers});
  };
  
  return (
    <TouchableOpacity 
    onPress={() => handleOffers(item.id)}
    style={{marginHorizontal: 1,  width:105, height:180, alignItems: "center",  borderColor: COLORS.lightGray1, borderWidth: 1, backgroundColor: '#fff', borderRadius: 10
        }}
    >
      {/* <TouchableOpacity onPress={handleOffers}> */}
        <View style={{alignItems: "center",}}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 90, height: 50, borderRadius: 8,  }}
          />
        </View>  
      <View style={{flexDirection: 'row',marginTop:10, marginBottom:5 }}>
      <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
      <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
      <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
      <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
      <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
      </View>
      <Text>
        {item.place}
      </Text>
      <Text style={{  fontWeight: '600', fontSize:16}}>
        {item.type}
      </Text>
      <TouchableOpacity onPress={() => handleOffers(item)} style={{backgroundColor: '#1d8129', borderRadius: 5, width: 80, height: 50, borderRadius: 5}}>
        <Text style={{color: '#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center', fontSize:20}}>
          {item.price}
        </Text>
      </TouchableOpacity>
      </TouchableOpacity>
  );
};


const Home = ({navigation, route}) => {
 // const  name  = route.params;


 
  //const route = useRoute();
  //const { userName } = route.params;
  //const [userNameState, setUserNameState] = useState(userName);


  const [searchText, setSearchText] = useState('');

const [modalVisible, setModalVisible] = useState(false);

const handleOpenModal = () => {
  setModalVisible(true);
};

const handleCloseModal = () => {
  setModalVisible(false);
};

const handleApplyFilters = () => {
  // Logic to apply filters
  setModalVisible(false);
};

const handleSearch = async () => {
  console.log("makingApiRequest")
  try {
    const response = await axios.get(`https://staging-madam-food.onrender.com/users/items/search/?query=${'Rice'}` );
    // Process the search results here
    console.log(response.data);
 
  navigation.navigate("Search", {data:response.data.items})
  } catch (error) {
    console.error('Error performing search:', error.response.data);
    // Handle error, such as displaying an error message
  }
};


  //const navigation = useNavigation(); //{/* WHEN THE IMAGE IS CLICKED ON TO LEAD TO THE MENU PAGE */}
  //console.log(item, 'Hello world');

  const renderFavouriteKitchen =({ item }) => {
    return (
        
      <SafeAreaView style={{flexDirection:'row', height: 120, marginTop: 1,paddingHorizontal:10, borderColor: COLORS.lightGray1, borderWidth: 1, backgroundColor: '#fff', borderRadius: 10,}}>
        <Image source={{ uri: item.image}} style={{width: 90, height: 100, marginHorizontal: 5, marginVertical: 5}}/>
        <View style={{flexDirection: 'row', margin: 5, padding: 10}}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        </View>
        <View>
            <View style={{flexDirection: 'column', top: 60, right: 100,}}>
                <Text style={{fontSize: 18, fontWeight: '800'}}>
                    {item.place}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}> 
                    {item.distance}
                </Text>
            
            </View>
            <TouchableOpacity onPress={() => handleFavouriteKitchen(item)} style={{backgroundColor: '#1d8129', 
                    borderRadius: 5, width: 100, height: 60, borderRadius: 5, left: 15, alignContent: 'center',
                    justifyContent:"center"
                    }}>
                <Text style={{color: '#fff', fontWeight: '600', fontSize:16,  alignSelf: 'center',}}>
                    {item.more}
                </Text>
                </TouchableOpacity>
        </View>
            
    </SafeAreaView>
    );
  };
  const handleFavouriteKitchen = (item) => {
    console.log('Pressed favourite kitchen', item);
  };

  
  const renderAddedKitchen =({ item }) => {
    return (
        // IMAGE SECTION
      <SafeAreaView style={{flexDirection:'row', height: 120, marginTop: 10,paddingHorizontal:10, borderColor: COLORS.lightGray1, borderWidth: 1, backgroundColor: '#fff', borderRadius: 10,}}>
        <Image source={{ uri: item.image}} style={{width: 80, height: 100, marginHorizontal: 5, marginVertical: 5,}}/>
        {/* RATING SECTION */}
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15,tintColor: '#1d8129' }}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        </View>
        <View>
            {/* TEXT SECTION */}
            <View style={{flexDirection: 'column', top: 60, right: 100,}}>
                <Text style={{fontSize: 18, fontWeight: '800'}}>
                    {item.place}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}> 
                    {item.distance}
                </Text>
            
            </View>
            {/* SEE MORE */}
            <TouchableOpacity onPress={() => handleAddedKitchen(item)} style={{backgroundColor: '#1d8129', 
                    borderRadius: 5, width: 100, height: 60, borderRadius: 5, left: 15, alignContent: 'center',
                    justifyContent:"center"
                    }}>
                <Text style={{color: '#fff', fontWeight: '600', fontSize:16,  alignSelf: 'center',}}>
                    {item.more}
                </Text>
                </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  const handleAddedKitchen = (item) => {
    console.log('Pressed added kitchen', item);
  };
  

  const renderLocalKitchen =({ item }) => {
    return (
      <SafeAreaView style={{flexDirection:'row', height: 120, marginTop: 10,paddingHorizontal:10, borderColor: COLORS.lightGray1, borderWidth: 1, backgroundColor: '#fff', borderRadius: 10,}}>
        <Image source={{ uri: item.image}} style={{width: 80, height: 100, marginHorizontal: 5, marginVertical: 5,}}/>
        <View style={{flexDirection: 'row', margin: 10, padding: 10}}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        <Image source={{uri: item.noRating}} style={{width: 15, height:15, }}/>
        </View>
        <View>
            {/* TEXT SECTION */}
            <View style={{flexDirection: 'column', top: 60, right: 100,}}>
                <Text style={{fontSize: 18, fontWeight: '800'}}>
                    {item.place}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}> 
                    {item.distance}
                </Text>
            
            </View>
            {/* SEE MORE */}
            <TouchableOpacity onPress={() => handleLocalKitchen(item)} style={{backgroundColor: '#1d8129', 
                    borderRadius: 5, width: 100, height: 60, borderRadius: 5, left: 15, alignContent: 'center',
                    justifyContent:"center"
                    }}>
                <Text style={{color: '#fff', fontWeight: '600', fontSize:16, marginTop: 12, alignSelf: 'center',}}>
                    {item.more}
                </Text>
                </TouchableOpacity>
        </View>
      </SafeAreaView>

    );
  };
  const handleLocalKitchen = (item) => {
    console.log('Pressed local kitchen', item);
  };

  const kitchen = [
    {title: 'Your Favourite Kitchen', data: favouriteKitchen},
    {title: 'Recently Added Kitchen', data: addedKitchen},
    {title: 'Your Local Kitchen', data: localKitchen},
]

  function renderSearch() {
    return (
      <View style={{  alignItems:'space-between'}}>
        <View style={{
          flexDirection: 'row',
          height: 35,
          alignItems: 'center',
          marginHorizontal: 10,
          marginRight: 70,
          paddingHorizontal: 20,
          borderRadius: 10,
          backgroundColor: '#dcdcdc ',
          borderWidth: 2,
          marginTop: 10,
          width: 260
          }}
        >
        {/* ICON SECTION */}
        {/* <Image
          source={{
            uri: 'https://img.icons8.com/?size=512&id=3096&format=png'
          }}
          resizeMode='cover'
          style={{
            height:20, width:20, tintColor: '#050505'
          }}
        /> */}
        {/* TEXTINPUT SECTION */}
        <TextInput
            style={{
              flex:1,
              marginLeft: 12,
              fontSize: 20,
            }}
            placeholder='Search'
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch} // Trigger the search API when the user submits the search

          />
          <TouchableOpacity  onPress={handleSearch}>
          <Image
              source={{
                uri: 'https://github.com/byprogrammers/LCRN16-food-delivery-app-lite-starter/blob/master/assets/icons/search.png?raw=true'
              }}
              resizeMode='cover'
              style={{
                width:20,
                height: 20,
                tintColor: 'black',
                //marginRight: 200,
              }}
             
            /> 
            </TouchableOpacity>
      </View>
      <View style={{position:'absolute', left: 300, top: 15}}>
            {/*FILTER SECTION  */}
              <TouchableOpacity  style={{ marginTop: -5,}} onPress={handleOpenModal}>
      {/* Button with filter icon to open the filter modal */}
        <Image
          source={icons.filtericon}
          resizeMode="cover"
          style={{
            height: 35,
            width: 35,
            borderWidth: 1,
            borderColor: '#050505',
            borderRadius: 5,
            tintColor: '#050505'
          }}
        />
      </TouchableOpacity>

      {/* Filter Modal */}
      <FilterModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onApply={handleApplyFilters}
      />
    </View>
           
      </View>
      
    )
  }

  return (

<SafeAreaView style={{
      paddingHorizontal: 10,
      marginTop: Platform.OS == "android" ? 20 : 8,
  }}>
      {/* PROFILE AND GREETING SECTION */}
      <View style={{flexDirection: 'row', marginTop: 25, justifyContent: 'center', height: 50, right:190, alignSelf: 'space-between'}}>
        <Image
          source={icons.profilepics}
          resizeMode='cover'
          style={{width:50,  height:50, borderRadius: 100, }}
        />
        <Text
          style={{fontWeight: 'bold',justifyContent: 'center', padding:5, fontSize: 20}}
        >
          Hi Amara
        </Text>
      </View>
     
      {/* SEARCH SECTION */}
       {renderSearch()}
       <ScrollView>
      {/*RECOMMENDED SECTION */}
       <View style={{flexDirection: 'row', borderWidth: 2, borderColor: '#1d8129', 
                      width:335, marginTop: 10, borderRadius: 12, justifyContent: 'space-between' }}>
          <View style={{margin: 10, left: 15, top: 20,}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>UPTO</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#1d8129'}}>20% OFF</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Eguisi Soup</Text>
          </View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-vnf8yFlp2lmc7B_V13P63MoX7DsCPm8JZzg7KA&s'
            }}
            resizeMode='cover'
            style={{
              margin:10,
              width:130,
              height: 130,
              borderWidth:5,
              borderColor: '#1d8129',
              borderRadius: 12,
              left: 65,
            }}
           />
           {/* Order now */}
          <View style={{position: 'relative', right: 250, top: 110, marginHorizontal: 10,}}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#1d8129', width: 100, height: 50, borderRadius: 5}}>
              <Text style={{color:'#fff', fontWeight: '600', marginTop: 12, alignSelf: 'center'}}>Order Now</Text>
            </TouchableOpacity>
          </View> 
       </View>
       {/* CATEGORY SECTION */}
       <Text style={{color: '#1d8129', marginTop: 3, padding: 10, fontWeight: '500', fontSize:16}}>Categories</Text>
       <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
          {/* OFFERS */}
          <Text style={{color: '#1d8129', marginTop: -1, padding: 10, fontWeight: '500', fontSize:16}}>Today's Special Offers</Text>

           {/* <FlatList
          data={offers}
          renderItem={renderOffers}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          />  */}

          {/* WHEN THE IMAGE IS CLICKED ON TO LEAD TO THE MENU PAGE */}
          <FlatList
            data={offers}
            renderItem={({ item }) => renderOffers({ item, navigation })}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        {/* <StatusBar style="auto" /> */}



        <SectionList
            sections={kitchen}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({ item, section }) => {
              switch (section.title) {
                case 'Your Favourite Kitchen':
                  return renderFavouriteKitchen({ item });
                case 'Recently Added Kitchen':
                  return renderAddedKitchen({ item });
                case 'Your Local Kitchen':
                  return renderLocalKitchen({ item });
                default:
                  return null;
              }
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ color: '#1d8129', margin: 2, padding: 5, fontWeight: '500', fontSize:16 }}>
                {title}
              </Text>
            )}
            showsVerticalScrollIndicator={false}
          />
      
      </ScrollView>
    </SafeAreaView>
  );
};



 const styles = StyleSheet.create({
   container: {
    flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
   },
});

export default Home;