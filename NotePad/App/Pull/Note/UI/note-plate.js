import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

const NotePlate = React.memo(({
  LeftSlot = null,
  RightSlot = null,
  BottomSlot = null,
  Height = 40,
  OnPress = null,
}) => {
  return (
    <Pressable onPress={OnPress} style={[styles.notePlate, { height: Height }]}>
      {LeftSlot && (
        <View style={styles.textSlotLeft}>
          <LeftSlot />
        </View>
      )}
      {RightSlot && (
        <View style={styles.textSlotRight}>
          <RightSlot />
        </View>
      )}
      {BottomSlot && (
        <View style={styles.bottomSlot}>
          <BottomSlot />
        </View>
      )}
    </Pressable>
  );
});

export default NotePlate;

const styles = StyleSheet.create({
  notePlate: {
    position: 'relative',
    width: '100%',
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  textSlotLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textSlotRight: {
    flex: 1,
    opacity: 0.6,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bottomSlot: {
    position: 'absolute',
    bottom: '-18%',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
});
