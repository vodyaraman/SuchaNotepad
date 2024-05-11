import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, PanResponder } from 'react-native';

const Switcher = ({
  initialActive = 0,
  width = 300,
  height = 40,
  totalStates = 3,
  stateLabels = ['State 1', 'State 2', 'State 3'],
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

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {
      dx: pan.x,
    }], { useNativeDriver: false }),
    onPanResponderRelease: (_, gesture) => {
      const movedBy = gesture.dx > 0 ? Math.floor(gesture.dx / (width / totalStates)) : Math.ceil(gesture.dx / (width / totalStates));
      const newIndex = Math.min(Math.max(activeIndex + movedBy, 0), totalStates - 1);
      setActiveIndex(newIndex);
    }
  });

  const switcherPosition = animation.interpolate({
    inputRange: stateLabels.map((_, index) => index),
    outputRange: stateLabels.map((_, index) => `${(index / (totalStates - 1)) * 66.66}%`)
  });

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={[styles.structureBlockToggler, { width, height }]}>
      <Animated.View {...panResponder.panHandlers} style={[styles.switcher, { left: switcherPosition, width: `${100 / totalStates}%`, height: height - 4 }]} />
      {stateLabels.map((label, index) => (
        <TouchableOpacity key={index} style={[styles.labelContainer, { width: `${100 / totalStates}%` }]} onPress={() => handlePress(index)}>
          <Text style={styles.labelText}>{label}</Text>
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
    backgroundColor: '#cccccc',
    borderRadius: 20,
    overflow: 'hidden',
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
    fontWeight: '600',
    fontFamily: 'Roboto Slab',
    fontSize: 16,
    color: '#000',
  },
});

export default Switcher;




