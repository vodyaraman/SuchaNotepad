import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputText = ({
  text = "",
  fontSize = 12,
  fontFamily = 'Montserrata-medium',
  fontWeight = 'normal',
  color = '#000',
  textAlign = 'left',
  placeholder="Enter note",
  height= "auto",
  multiline= true,
}) => {
  const [currentText, setCurrentText] = useState(text);
  const [isFocused, setIsFocused] = useState(false);  // Состояние для отслеживания фокуса

  const handleChangeText = (text) => {
    setCurrentText(text);
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
        isFocused && styles.focusedInput // Добавляем стили для активированного состояния
      ]}
      onChangeText={handleChangeText}
      value={currentText}
      placeholder={placeholder}
      keyboardType="default"
      multiline={multiline}
      numberOfLines={4}
      onFocus={() => setIsFocused(true)}  // Устанавливаем фокус
      onBlur={() => setIsFocused(false)}  // Снимаем фокус
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingLeft: '3.5%',
    paddingRight: '3.5%',
    backgroundColor: 'transparent',
    
    borderRadius: 15,
  },
  focusedInput: {
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: '#ffffff26'
  },
});

export default InputText;





