import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';

export function RotateAnim({isVisible, children}){
  const [transformRotate] = useState(new Animated.Value(0)); // Initial value for Transform: rotateX: 90

  useEffect(()=>{
    if (isVisible) { 
      Animated.timing(transformRotate, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      
    } else{
      Animated.timing(transformRotate, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      
    }
    
  }, [ isVisible, transformRotate ])
  
  const RotateX = transformRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg'],
  })

  return (    
      <Animated.View style={{transformOrigin: 'top', transform: [{rotateX: RotateX}], width: '100%', alignItems:'center'}}>
        {children}
      </Animated.View> 
  );
};
