import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const InputText = ({ onChangeText, value, fontSize = 16, fontFamily = 'System', fontWeight = 'normal', color = '#000' }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { fontSize, fontFamily, fontWeight, color }]}
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default InputText;

