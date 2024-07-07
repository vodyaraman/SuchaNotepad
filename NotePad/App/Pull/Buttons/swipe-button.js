import { StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

const SwipeButton = ({side, img}) => {

  return (
    <Pressable
     side={side} //Пропс, задающий направление отображения кнопки: 'left' или 'right' 
     style={({pressed}) => [side === 'left' ? 
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
    shadowOffset: {width: 0, height: 2},  
    shadowColor: '#171717',  
    shadowOpacity: 0.3,  
    shadowRadius: 3,
    
    width: 85,
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
    height: 35,
    width: 35,
    objectFit: 'fill',
  },
});