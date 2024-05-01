import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const SubmitButton = ({ buttonText, onPress }) => {
    return (
        <Pressable
            onPress={() => {
                console.warn("кнопка нажата");
                onPress();
            }}
            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1 }]}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});

export default SubmitButton;
