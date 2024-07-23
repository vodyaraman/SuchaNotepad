import { StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

const SwipeButton = ({ img, onPressHandler }) => {
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => [
        styles.swipeButton,
        { opacity: pressed ? 0.7 : 1 }
      ]}
    >
      <Image source={img} style={styles.ImageInButton} />
    </Pressable>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  swipeButton: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#171717',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  ImageInButton: {
    height: 35,
    width: 35,
    objectFit: 'fill',
  },
});
