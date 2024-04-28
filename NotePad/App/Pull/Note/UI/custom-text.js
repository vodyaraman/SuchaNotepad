import React from "react";
import { StyleSheet, Text } from "react-native";

// CustomText используем для визуализации любого выходящего текста в приложении
// Text-color в формате хэша цвета (#ffff), текст - строка, flex - justify-content, numberOfLines - количество строк


const CustomText = ({ textColor, text, flex = "start", numberOfLines = 1}) => {
  return (
    <Text
      style={[styles.text, {
        color: textColor,
        justifyContent: `flex-${flex}`
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

    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
    fontFamily: "Montserrata-medium",
    fontSize: 14,
  },
});