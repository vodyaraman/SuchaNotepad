import React from 'react';
import { View, StyleSheet } from 'react-native';
import GradientBackground from './linear-gradient';

const FullScaledNotePlate = React.memo(({ 
  User = null, 
  Title = null, 
  Note = null, 
  Extra = null,
  Timezone = null,
  backgroundColor = '#ffff', 
  height = '100%',
}) => {
  console.log("Render noteplate")
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
      {Timezone && (
        <View style={styles.timezoneStyle}>
          <Timezone />
        </View>
      )}
      {Extra && (
        <View style={styles.extraStyle}>
          <Extra />
        </View>
      )}
    </GradientBackground>
  );
});

export default FullScaledNotePlate;

const styles = StyleSheet.create({
  userStyle: {
    flex: 1,
    width: '100%',
  },
  titleStyle: {
    width: '100%',
    justifyContent: 'center',
    flex: 2,
  },
  noteStyle: {
    width: '100%',
    flex: 9.5,
    alignItems: 'center',
  },
  timezoneStyle: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#fcfcfcb0',
  },
  extraStyle: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#fcfcfcb0',
    width: '100%',
    padding: 10,
  },
});



