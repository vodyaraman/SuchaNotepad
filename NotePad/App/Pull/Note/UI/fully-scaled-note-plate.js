import React from 'react';
import { View, StyleSheet } from 'react-native';
import GradientBackground from './linear-gradient';

const Noop = ()=> null;

const FullScaledNotePlate = ({ Orion, Scorpius, Andromeda, Prometheus = Noop, backgroundColor, height }) => {
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
        <View style={styles.prometheusStyle}>
          <Prometheus/>
        </View>
      </View>
    </GradientBackground>
  );
};

export default FullScaledNotePlate;

const styles = StyleSheet.create({
  orionStyle: {
    padding: '5%',
    width: '100%',
    backgroundColor: '#fcfcfcb0',
  },
  scorpiusStyle: {
    width: '100%',

    justifyContent: 'center',
    padding: 4,
    flex: 1,
  },
  andromedaStyle: {
    width: '100%',
    flex: 10,

    alignItems: 'center',
  },
  prometheusStyle: {
    alignItems: 'flex-start',

    backgroundColor: '#fcfcfcb0',
    width: '100%',
    padding: 10,
  },
});

/*    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, */

