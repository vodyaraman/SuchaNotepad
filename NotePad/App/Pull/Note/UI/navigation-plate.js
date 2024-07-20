import React from 'react';
import { SafeAreaView, View, StyleSheet, Button } from 'react-native';

const NavigationPlate = React.memo(({
  BackButton = null,
  GroupButton = null,
  SettingsButton = null,
  AddButton= null,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {BackButton && (
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
      )}
      {GroupButton && (
        <View style={styles.groupButtonContainer}>
          <GroupButton />
        </View>
      )}
      {SettingsButton && (
        <View style={styles.settingsButtonContainer}>
          <SettingsButton />
        </View>
      )}
      {AddButton && (
        <View style={styles.addButtonContainer}>
          <AddButton />
        </View>
      )}
    </SafeAreaView>
  );
});

export default NavigationPlate;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '6vh',
    position: 'relative',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    zIndex: 5,
  },
  backButtonContainer: {
    width: 45,
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupButtonContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButtonContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonContainer: {
    position: "absolute",
    right: 15,
    bottom: "10vh",
    height: 45,
    width: 45,
  }
});

