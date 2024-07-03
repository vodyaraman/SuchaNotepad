import React from 'react';
import { View, StyleSheet } from 'react-native';

const FullScaledNotePlate = React.memo(({
  User = null,
  Title = null,
  Note = null,
  Extra = null,
  Timezone = null,
  Background = null,
}) => {
  return (
    <>
      {Background && (
        <View style={styles.backgroundStyle}>
          <Background />
        </View>
      )}
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
        </View>
      )}
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
      </>
  );
});

export default FullScaledNotePlate;

const styles = StyleSheet.create({
  backgroundStyle: {
    width: '100%',
    height: '100%',

    position: 'absolute',
    top: 0,
    left: 0,

    margin: 0,
    padding: 0,
  },
  userStyle: {
    flex: 2,
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
    margin: 0,
  },
  extraStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcfcb0',
    maxHeight: '60px',
    width: '100%',
    padding: 10,
  },
});



