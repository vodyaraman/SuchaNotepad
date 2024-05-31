import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import {heightPercentageToDP as hg, widthPercentageToDP as wd} from 'react-native-responsive-screen';

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
  secureTextEntry = false,
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
      secureTextEntry={secureTextEntry}
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
    paddingBottom: 5,
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: hg('0.2%'),
  },
  focusedInput: {
    outlineStyle: 'none'
  },
});

export default InputText;






