import React from 'react';
import  {useState, useRoute} from 'react';
import {View, Text, SectionList, TouchableOpacity, Image, SafeAreaView,TextInput,StyleSheet,TouchableHighlight, FlatList} from 'react-native';
import {addedKitchen, localKitchen, categoryList} from "..//../SourceData/ExternalData"
import { COLORS } from '../../constants';
import axios from 'axios';





const TopFoods = [
  {id: 1, name: 'Soup'},
  {id: 2, name: 'Chips'},
  {id: 3, name: 'Pastries'},
  {id: 4, name: 'Rice'},
  {id: 5, name: 'Drinks'},
  {id: 6, name: 'Chips'},
  {id: 7, name: 'Pastries'},
  {id: 8, name: 'Rice'},
];



const handlePress = (item) => {
  console.log('Pressed Topcategory', item);
};

const renderTopCategory = ({ item, value }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity TouchableOpacity onPress={() => handlePress(item)} 
    
        style={{ flexDirection: 'row' ,  alignItems: "center", padding: 20,
        paddingHorizontal: 10, marginTop:-10}}>
      <Text style={{color: value ? COLORS.white : COLORS.primary, fontSize:18, fontWeight:"400", paddingHorizontal: 2, marginTop:-10, marginVertical:-20 }}>
        {item.name}
      </Text>
        </TouchableOpacity>
        </View>
  );
};

const rendercategorylist =({ item }) => {
    return (
        
      <View style={{flexDirection:'row', marginTop: 10, borderColor: COLORS.lightGray1, borderWidth: 1, backgroundColor: '#fff', borderRadius: 10,}}>
        <Image source={{ uri: item.image}} style={{width: 100, height: 100, marginHorizontal: 5, marginVertical: 5,}}/>
        <View >
        <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 10, marginTop: 15  }}>
        <Text style={{fontSize: 20, fontWeight: '600', color:COLORS.primary}}>{item.place}</Text>
        <Image source={{uri: item.favourite}} style={{width: 30, height:30,tintColor: COLORS.gray}}/>
        </View>


        <View  style={{flexDirection: 'row',  padding: 10,marginTop: -15  }}>
        <Image source={{uri: item.location}} style={{width: 15, height:15, tintColor: COLORS.black}}/>
        <Text style={{fontSize: 12, fontWeight: '600'}}> {item.address}</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 10, marginTop: -15 }}>
        <Image source={{uri: item.rating}} style={{width: 15, height:15, tintColor: '#1d8129'}} />
        <Text style={{fontSize: 12, fontWeight: '600', color: COLORS.gray}}> {item.distance}</Text>
        </View>     
        </View>       
    </View>
    );
  };
  
  
const Categories = () => {

  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://staging-madam-food.onrender.com/users/items/search/?query=soup=${searchText}`);
      // Process the search results here
      console.log(response.data);
    } catch (error) {
      console.error('Error performing search:', error);
      // Handle error, such as displaying an error message
    }
  };
  
    //const navigation = useNavigation(); //{/* WHEN THE IMAGE IS CLICKED ON TO LEAD TO THE MENU PAGE */}
    //console.log(item, 'Hello world');

  const renderCategoryTop =() =>{
    return (
      <View >
        <View  style={{
        justifyContent:"space-between",
        flexDirection: 'row' ,
        alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 25,
        marginBottom: 15
    }} >
        <Text style={{ color: COLORS.primary, fontSize: 22}}>Nearby</Text>
        
        <View style={{
          flexDirection: 'row',
          height: 45,
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 12,
          backgroundColor: COLORS.white,
          borderColor: COLORS.primary,
          borderWidth: 2,
          marginTop: 10,
          width: 200
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
          <TouchableOpacity>
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
              onPress={searchText}
            /> 
            </TouchableOpacity>
      </View>
      </View>
      </View>
    )
  }

    const kitchen = [
        {title: 'category List', data: categoryList},
    ]
    return (
        <SafeAreaView style={{ paddingHorizontal: 10,
          marginTop: Platform.OS == "android" ? 35 : 8,
      }}>
        {renderCategoryTop()}
        <FlatList
          data={TopFoods}
          renderItem={renderTopCategory}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
          <SectionList
            sections={kitchen}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({ item, section }) => {
              switch (section.title) {
                case 'category List':
                  return rendercategorylist({ item });
                default:
                  return null;
              }
            }}
        
          />
        </SafeAreaView>
      );
    // return (
    //     <View style={{flex:1}}>
    //        <SectionList
    //             sections={kitchen}
    //             keyExtractor={(item, index) => item + index}
    //             renderItem={({item}) => (
    //                 <View style = {{ padding: 20, marginVertical: 8}}>
    //                     <Text style = {{fontSize: 20}}>
    //                         {item}
    //                     </Text>
    //                 </View>    
    //             )}
    //             renderSectionHeader={({section: {title}}) => (
    //                 <Text>
    //                     {title}
    //                 </Text>
    //             )} 
    //         />
    //     </View>
    // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Categories;