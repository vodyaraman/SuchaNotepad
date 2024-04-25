import React from "react";
import { StyleSheet, Text } from "react-native";

// CustomText используем для визуализации любого входящего текста в приложении
// Text-color в формате хэша цвета (#ffff), текст - строка, flex - justify-content.


const CustomText = ({ textColor, text, flex }) => {
  return (
    <Text
      style={[styles.text, {
        color: textColor,
        justifyContent: `flex-${flex}`
        }]}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: "black",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontWeight: "bold",
    fontFamily: "Montserrata-bold"
  },
});