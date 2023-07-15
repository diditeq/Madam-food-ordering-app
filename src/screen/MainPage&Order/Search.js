import React from "react";
import {View,Text, FlatList} from "react-native";

const renderSearchInput =({item}) => {
    return(
        <View>
            <Text></Text>
        </View>
    )

}

const Search =({route}) => {
  //  const {itemId, query.params.data} =route.params || {};

  const data = route.params?.data || null;
     console.log('itemId', itemId);
     console.log('data:', data);
    return(
        <View> 
        <FlatList
          data={offer}
          renderItem={renderSearchInput}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        </View>   
        
    )
}


export default Search;
