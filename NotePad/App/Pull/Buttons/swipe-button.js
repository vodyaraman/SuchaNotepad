import { StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

export function SwipeButton({side, img}) {

  return (
    <Pressable
     side={side} //Пропс, задающий направление отображения кнопки: 'left' или 'right' 
     style={({pressed}) => [side === 'left' ? //В зависимости от пропса side, здесь меняются стили для кнопки
     [styles.swipeButton, styles.leftSideOfButton] : 
     [styles.swipeButton, styles.rightSideOfButton],
     {opacity: pressed ? 0.7 : 1}]}>
      <Image source={img} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  swipeButton: {
    height: 80,
    width: 100,
    backgroundColor: '#FFF4C4',

    alignItems: 'center',
    justifyContent: 'center',
  },

  leftSideOfButton: {
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
  },

  rightSideOfButton: {
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
  }
});