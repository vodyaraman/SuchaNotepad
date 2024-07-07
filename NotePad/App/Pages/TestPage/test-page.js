import React from "react";
import { StyleSheet, View } from "react-native";
import { Group } from "../../Widgets";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <Group />
    </View>
    
)};

export default TestPage;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        height: '100%',
        position: 'relative',
        flexDirection: "column",
        backgroundColor: '#EC7171',
        paddingTop: 30,
        paddingBottom: 15,
    }
});