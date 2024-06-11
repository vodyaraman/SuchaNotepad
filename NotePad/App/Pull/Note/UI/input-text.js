import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import {heightPercentageToDP as hg, widthPercentageToDP as wd} from 'react-native-responsive-screen';

const InputText = ({
  // text = "",
  borderBottomColor = 'white',
  fontSize = 12,
  lineHeight,
  maxLength,
  fontFamily = 'Montserrata-medium',
  fontWeight = 'normal',
  color = '#000',
  textAlign = 'left',
  placeholder = "Enter note",
  height = "auto",
  multiline = true,
  secureTextEntry = false,
  onChangeText = () => {},
  onBlur = () => {},
  onKeyPress = () => {},
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setCurrentText('');
  }, []);

  const handleChangeText = (value) => {
    setCurrentText(value);
    onChangeText(value);
  };

  const onBlurAction = () => {
    setIsFocused(false)
    onBlur()
  }

  return (
    <TextInput
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      style={[
        styles.input, 
        {
          fontSize: fontSize,
          lineHeight: lineHeight,
          fontFamily: fontFamily, 
          fontWeight: fontWeight, 
          color: color, 
          textAlign: textAlign,
          height: height,
          borderBottomColor: borderBottomColor,
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
      onBlur={onBlurAction}  // Remove focus
      onKeyPress={(e) => onKeyPress(e)}
      
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
    borderBottomWidth: hg('0.2%'),
  },
  focusedInput: {
    outlineStyle: 'none'
  },
});

export default InputText;






