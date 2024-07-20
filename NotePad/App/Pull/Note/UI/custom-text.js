import React from "react";
import { StyleSheet, Text } from "react-native";
import { SharedColors } from "../../Consts/Colors/dark-theme";

const CustomText = ({
  textColor = SharedColors.TextColor,
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
    zIndex: 10,
    height: "100%",
    flexDirection: "row",

    alignItems: "center",
  },
});
