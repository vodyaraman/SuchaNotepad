import React from "react"
import { StyleSheet, Button } from "react-native"

const SubmitButton = (buttonText) => {
    return (
        <Button style = {styles.button}>{buttonText}</Button>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        color: "white"
    }
});

export default SubmitButton