import React from "react";
import { StyleSheet, View } from "react-native";
import { Notepad } from "../../Widgets";


const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <Notepad/>
    </View>
)};

export default TestPage;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        position: 'relative',
        backgroundColor: "#94D4EF",
        flexDirection: "column",
    }
});