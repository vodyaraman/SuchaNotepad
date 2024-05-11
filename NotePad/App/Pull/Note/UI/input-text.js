import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({
  onChangeText,
  text,
  fontSize = 16,
  fontFamily = 'Montserrata-medium',
  fontWeight = 'normal',
  color = '#000',
  textAlign = 'left',
  placeholder="Enter note",
  height= "auto",
}) => {
  return (
    <TextInput
      style={[
        styles.input, 
        {
          fontSize: fontSize, 
          fontFamily: fontFamily, 
          fontWeight: fontWeight, 
          color: color, 
          textAlign: textAlign,
          height: height,
        }
      ]}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      keyboardType="default"
      multiline={true}
      numberOfLines={4}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: '2%',
  },
});

export default InputText;




