import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({
  value='',
  borderBottomColor = 'transparent',
  fontSize = 12,
  lineHeight,
  maxLength,
  fontFamily = 'Montserrata-medium',
  fontWeight = 'normal',
  color = '#000',
  backgroundColor = "#fff0",
  textAlign = 'left',
  placeholder = "Enter note",
  height = "auto",
  numberOfLines = 1,
  multiline = true,
  secureTextEntry = false,
  onChangeText = () => {},
  onBlur = () => {},
  onKeyPress = () => {},
}) => {
  const [currentText, setCurrentText] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setCurrentText(value);
  }, [value]);

  const handleChangeText = (value) => {
    setCurrentText(value);
    onChangeText(value);
  };

  const onBlurAction = () => {
    setIsFocused(false);
    onBlur();
  };

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
          backgroundColor: backgroundColor,
        },
        isFocused && styles.focusedInput
      ]}
      onChangeText={handleChangeText}
      value={currentText}
      placeholder={placeholder}
      keyboardType="default"
      multiline={multiline}
      numberOfLines={numberOfLines}
      onFocus={() => setIsFocused(true)}
      onBlur={onBlurAction}
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
    borderBottomWidth: 1,
  },
  focusedInput: {
    outlineStyle: 'none',
  },
});

export default InputText;







