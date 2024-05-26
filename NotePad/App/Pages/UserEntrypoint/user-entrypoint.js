import React from "react";
import { StyleSheet, View } from "react-native";
import { RegAndAuth } from "../../Widgets";


const PageUserEntrypoint = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <RegAndAuth/>
    </View>
)};

export default PageUserEntrypoint;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        position: 'relative',
        backgroundColor: "#94D4EF",
        flexDirection: "column",
    }
});