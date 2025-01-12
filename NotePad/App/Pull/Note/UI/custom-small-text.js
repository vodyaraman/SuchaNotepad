import React from "react";
import { StyleSheet, Text } from "react-native";

// Этот текст меньше обычного

const CustomSmallText = ({text}) => {
  return (
    <Text
      style={styles.text}
      numberOfLines={1}
      >
      {text}
    </Text>
  );
};

export default CustomSmallText;

const styles = StyleSheet.create({
  text: {
        fontFamily: "Montserrata-bold",
        fontWeight: 'normal',
        color: 'black',
        justifyContent: 'center',
    },
});