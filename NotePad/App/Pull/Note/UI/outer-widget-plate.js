import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WidgetColors } from '../../Consts/Colors/dark-theme';

const OuterPlate = ({ children }) => {
  return (
    <View style={[styles.OuterPlate, { backgroundColor: WidgetColors.MainWidgetColor, borderColor: WidgetColors.MainWidgetColor, borderWidth: 0.5 }]}>
      {children}
    </View>
  );
};

export default OuterPlate;

const styles = StyleSheet.create({
  OuterPlate: {
    position: "relative",
    width: "100%",
    height: "6vh",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,

    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  }
});

