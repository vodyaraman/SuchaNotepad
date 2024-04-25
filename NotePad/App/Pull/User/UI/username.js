import React from "react";
import { StyleSheet, Text } from "react-native";

const User = ({ userColor, userName }) => {
  return (
    <Text style={[styles.text, { color: userColor }]}>
      {userName}
    </Text>
  );
};

export default User;

const styles = StyleSheet.create({
  text: {
    color: "black",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontWeight: "bold",
  },
});