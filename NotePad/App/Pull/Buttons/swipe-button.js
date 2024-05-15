import { StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

const SwipeButton = ({side, img}) => {

  return (
    <Pressable
     side={side} //Пропс, задающий направление отображения кнопки: 'left' или 'right' 
     style={({pressed}) => [side === 'left' ? //В зависимости от пропса side, здесь меняются стили для кнопки
     [styles.swipeButton, styles.leftSideOfButton] : 
     [styles.swipeButton, styles.rightSideOfButton],
     {opacity: pressed ? 0.7 : 1}]}>
      <Image source={img} style={styles.ImageInButton}/>
    </Pressable>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  swipeButton: {
    height: '11.5vh',
    width: '25vw',
    backgroundColor: '#FFF4C4',

    alignItems: 'center',
    justifyContent: 'center', 

    zIndex: 5,
  },

  leftSideOfButton: {
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
  },

  rightSideOfButton: {
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
  },

  ImageInButton: {
    width: 45,
    height: 45,

    objectFit: 'fill',

    zIndex: 5,
  },
});