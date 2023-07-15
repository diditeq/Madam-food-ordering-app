import { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const FilterModal = ({ visible, onClose, onApply }) => {
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await axios.get('https://staging-madam-food.onrender.com/users/items/filter?name=fish peppersoup');
        setFilterOptions(response.data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
        // Handle error, such as displaying an error message
      }
    };

    if (visible) {
      fetchFilterOptions();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        {/* Display filter options */}
        {filterOptions.map((option) => (
          <TouchableOpacity key={option.id}>
            <Text>{option.name}</Text>
          </TouchableOpacity>
        ))}

        {/* Buttons */}
        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onApply} style={styles.button}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});


export default FilterModal;