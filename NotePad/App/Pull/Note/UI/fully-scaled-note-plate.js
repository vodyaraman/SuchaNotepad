import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FullScaledNotePlate = ({ Orion, Scorpius, Andromeda, backgroundColor, height }) => {
  return (
    <View style={[styles.container, { backgroundColor, height }]}>
      <View style={styles.orionStyle}>
        <Orion />
      </View>
      <View style={styles.scorpiusStyle}>
        <Scorpius />
      </View>
      <View style={styles.andromedaStyle}>
        <Andromeda />
      </View>
      <TextInput style={styles.input} placeholder="Введите заметку" />
    </View>
  );
};

export default FullScaledNotePlate;

const styles = StyleSheet.create({
  container: {
    width: '100%', // Ширина статичная
  },
  orionStyle: {
    flex: 1,
    backgroundColor: 'red', // Пример стиля для Orion
    padding: 10,
  },
  scorpiusStyle: {
    flex: 2,
    backgroundColor: 'green', // Пример стиля для Scorpius
    padding: 10,
  },
  andromedaStyle: {
    flex: 1,
    backgroundColor: 'blue', // Пример стиля для Andromeda
    padding: 10,
  },
  input: {
    marginTop: 10,
    padding: 10,
  },
});
