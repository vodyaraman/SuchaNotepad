import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export function SwipeButton({side, img}) {

  return (
    <TouchableOpacity
    onPress={() => alert('hello world!')}
     side={side} //Пропс, задающий направление отображения кнопки: 'left' или 'right'
     activeOpacity={0.7} 
     style={side === 'left' ? //В зависимости от пропса side, здесь меняются стили для кнопки
     [styles.swipeButton, styles.leftSideOfButton] : 
     [styles.swipeButton, styles.rightSideOfButton]}>
      <Image source={img} />
    </TouchableOpacity>
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