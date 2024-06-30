import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { CustomSmallText } from '../Note';

const Switcher = ({
  initialActive = 0,
  width = '94%',
  height = 40,
  totalStates = 3,
  stateLabels = ['Заметка 📒', 'Список📋', 'На время⌚️'],
  onChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActive);
  const animation = useRef(new Animated.Value(activeIndex)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: activeIndex,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [activeIndex]);

  useEffect(() => {
    if (onChange) onChange(activeIndex);
  }, [activeIndex, onChange]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {
      dx: pan.x,
    }], { useNativeDriver: false }),
    onPanResponderRelease: (_, gesture) => {
      const movedBy = gesture.dx > 0 ? Math.floor(gesture.dx / (width / totalStates)) : Math.ceil(gesture.dx / (width / totalStates));
      const newIndex = Math.min(Math.max(activeIndex + movedBy, 0), totalStates - 1);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  });

  const switcherPosition = animation.interpolate({
    inputRange: stateLabels.map((_, index) => index),
    outputRange: stateLabels.map((_, index) => `${(index / (totalStates - 1)) * 66.66}%`)
  });

  const handlePress = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <View style={[styles.structureBlockToggler, { width, height }]}>
      <Animated.View {...panResponder.panHandlers} style={[styles.switcher, { left: switcherPosition, width: `${100 / totalStates}%`, height: height - 4 }]} />
      {stateLabels.map((label, index) => (
        <TouchableOpacity key={index} style={[styles.labelContainer, { width: `${100 / totalStates}%` }]} onPress={() => handlePress(index)}>
          <CustomSmallText text={label}/>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  structureBlockToggler: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    margin: '3%',
  },
  switcher: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontWeight: '300',
    fontFamily: 'Roboto Slab',
    fontSize: 13,
    color: '#000',
  },
});

export default Switcher;






