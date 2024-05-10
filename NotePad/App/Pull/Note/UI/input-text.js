import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const InputText = ({
  onChangeText,
  value,
  fontSize = 16,
  fontFamily = 'Montserrata-medium',
  fontWeight = 'normal',
  color = '#000',
  textAlign = 'left',
  flex = 'flex-start',
}) => {
  return (
    <View style={[styles.container, { justifyContent: flex }]}>
      <TextInput
        style={[styles.input, { fontSize, fontFamily, fontWeight, color, textAlign }]}
        onChangeText={onChangeText}
        value={value}
        placeholder="Enter note"
        keyboardType="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default InputText;


