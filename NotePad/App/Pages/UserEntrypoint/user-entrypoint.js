import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Authentication } from "../../Widgets";


const PageUserEntrypoint = () => {
    return (
    <SafeAreaView style = { styles.TestPageStyle}>
        <Authentication/>
    </SafeAreaView>
)};

export default PageUserEntrypoint;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        height: 0,
        position: 'relative',
        backgroundColor: "#94D4EF",
        flexDirection: "column",
    }
});