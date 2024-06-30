import React from 'react';
import { View, StyleSheet } from 'react-native';
import GradientBackground from './linear-gradient';

const FullScaledNotePlate = ({ 
  User = null, 
  Title = null, 
  Note = null, 
  Extra = null, 
  backgroundColor = '#ffff', 
  height = '100%',
}) => {
  return (
    <GradientBackground 
      backgroundColor={backgroundColor} 
      height={height} 
      width={'100%'}
      borderRadius={15}
    >
      {User && (
        <View style={styles.userStyle}>
          <User />
        </View>
      )}
      {Title && (
        <View style={styles.titleStyle}>
          <Title />
        </View>
      )}
      {Note && (
        <View style={styles.noteStyle}>
          <Note />
        </View>)}
      {Extra && (
        <View style={styles.extraStyle}>
          <Extra />
        </View>
      )}

    </GradientBackground>
  );
};

export default FullScaledNotePlate;

const styles = StyleSheet.create({
  userStyle: {
    flex: 1,
    padding: '5%',
    width: '100%',
    backgroundColor: '#fcfcfcb0',
  },
  titleStyle: {
    width: '100%',
    justifyContent: 'center',
    padding: 4,
    flex: 1,
  },
  noteStyle: {
    width: '100%',
    flex: 9.5,
    alignItems: 'center',
  },
  extraStyle: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#fcfcfcb0',
    width: '100%',
    padding: 10,
  },
});


