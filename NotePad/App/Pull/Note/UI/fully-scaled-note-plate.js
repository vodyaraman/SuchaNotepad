import React from 'react';
import { View, StyleSheet } from 'react-native';
import GradientBackground from './linear-gradient';

const FullScaledNotePlate = ({ Orion, Scorpius, Andromeda, backgroundColor, height }) => {
  return (
    <GradientBackground 
      backgroundColor={backgroundColor} 
      height={height} 
      width={'100%'}
      borderRadius={0}
      >
      <View style={styles.orionStyle}>
        <Orion />
      </View>
      <View style={styles.scorpiusStyle}>
        <Scorpius />
      </View>
      <View style={styles.andromedaStyle}>
        <Andromeda />
      </View>
    </GradientBackground>
  );
};

export default FullScaledNotePlate;

const styles = StyleSheet.create({
  orionStyle: {
    padding: '4%',
    width: '100%',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  scorpiusStyle: {
    width: '100%',
    padding: 3,
    flex: 1,
  },
  andromedaStyle: {
    width: '100%',
    padding: 3,
    flex: 10,

    alignItems: 'center',
  },
});

/*    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, */

