import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS,icons } from '../../constants';

const MsgBox = (props) => {
  const inputTextColor = props.type === 'SUCCESS' ? COLORS.primary : COLORS.red;

  return (
    <TextInput
      style={[styles.textInput, { color: inputTextColor }]}
      // Other TextInput props
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    alignContent: 'center',
    fontSize: 13,
  },
});

export default MsgBox;