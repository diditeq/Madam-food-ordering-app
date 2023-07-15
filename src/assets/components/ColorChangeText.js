import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


const ColorChangeText = () => {
    const [textColor, setTextColor] = useState('black');
  
    const handleTextPress = () => {
      setTextColor('blue'); // Change the color to blue when text is pressed
    };
  
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={handleTextPress} underlayColor="transparent">
          <Text style={[styles.text, { color: textColor }]}>Click me</Text>
        </TouchableHighlight>
      </View>
    );
  };

  
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

  export default ColorChangeText;
