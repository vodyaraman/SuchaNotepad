import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomText = ({
  textColor,
  text,
  flex = "flex-start",
  numberOfLines = 1,
  fontWeight = "normal",
  textAlign = "left",
  fontFamily = "Montserrata-medium",
  fontSize = 12,
}) => {
  return (
    <Text
      style={[styles.text, {
        color: textColor,
        justifyContent: flex,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        textAlign: textAlign,
        fontSize: fontSize,
      }]}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
    >
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: "black",
    opacity: 0.9,

    height: "100%",
    flexDirection: "row",

    alignItems: "center",
  },
});
