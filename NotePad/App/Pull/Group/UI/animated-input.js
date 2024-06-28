import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';

export function InputAnim({isVisible, children}){
    const [widthAnim] = useState(new Animated.Value(0));
    const [translateY] = useState(new Animated.Value(0))
  
    useEffect(()=>{
      if (isVisible) { 
        Animated.timing(widthAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
        
      } else{
        Animated.timing(widthAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start();
        
      }
      
    }, [ isVisible, widthAnim ])

    const interWidth = widthAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '60%'],
    })

    const interOpacity = widthAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    })

    return (    
        <Animated.View style={{width:interWidth, opacity:interOpacity}}>
          {children}
        </Animated.View> 
    );
};