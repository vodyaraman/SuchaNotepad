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
    minHeight: '9vh',
    maxHeight: '10vh',
    height: '100%',
    
    width: '23vw',
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
  },

  ImageInButton: {
    height: 40,
    width: 40,
    objectFit: 'fill',
  },
});