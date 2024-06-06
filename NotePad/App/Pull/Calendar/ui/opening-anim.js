import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';

export function OpeningAnim({isVisible, children}){
    const [fadeAnim] = useState(new Animated.Value(0));
    const [translateY] = useState(new Animated.Value(-20))
  
    useEffect(()=>{
      if (isVisible) { 
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();

        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        
      } else{
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
        
      }
      
    }, [ isVisible, fadeAnim ])
    
    // const RotateX = transformRotate.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['-90deg', '0deg'],
    // })
  
    return (    
        <Animated.View style={{transformOrigin: 'top', transform: [{translateY: translateY}], opacity: fadeAnim, position: 'absolute', width: '80%', }}>
          {children}
        </Animated.View> 
    );
  };