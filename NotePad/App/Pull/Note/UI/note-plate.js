import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NotePlate = ({ leftColor, rightColor }) => {
  return (
    <View style={styles.NotePlate}>
      <LinearGradient
        colors={[`${leftColor}1A`, `${leftColor}99`]} // От 10% до 60% непрозрачности
        style={styles.SideNotePlate}
      />
      <LinearGradient
        colors={[leftColor, rightColor]}
        style={styles.MiddleNotePlate}
      />
      <LinearGradient
        colors={[`${rightColor}99`, `${rightColor}1A`]} // От 60% до 10% непрозрачности
        style={styles.SideNotePlate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  NotePlate: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
  },
  SideNotePlate: {
    width: '20%',
    height: 70,
  },
  MiddleNotePlate: {
    width: '60%',
    height: 70,
  },
});

export default NotePlate;