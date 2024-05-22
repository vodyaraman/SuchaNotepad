import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({
  text = "",
  fontSize = 12,
  fontFamily = 'Montserrata-medium',
  fontWeight = 'normal',
  color = '#000',
  textAlign = 'left',
  placeholder = "Enter note",
  height = "auto",
  multiline = true,
  onChangeText = () => {},
}) => {
  const [currentText, setCurrentText] = useState(text);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  const handleChangeText = (text) => {
    setCurrentText(text);
    onChangeText(text);
  };

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
        },
        isFocused && styles.focusedInput // Add styles for focused state
      ]}
      onChangeText={handleChangeText}
      value={currentText}
      placeholder={placeholder}
      keyboardType="default"
      multiline={multiline}
      numberOfLines={4}
      onFocus={() => setIsFocused(true)}  // Set focus
      onBlur={() => setIsFocused(false)}  // Remove focus
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingLeft: '3.5%',
    paddingRight: '3.5%',
    backgroundColor: 'transparent',
  },
  focusedInput: {
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: '#ffffff26'
  },
});

export default InputText;






