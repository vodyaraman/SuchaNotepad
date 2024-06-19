import React from "react";
import { StyleSheet, View } from "react-native";

import { Notepad } from "../../Widgets";

const MainPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
            <Notepad />
    </View>
    
)};

export default MainPage;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        height: 0,
        position: 'relative',
        flexDirection: "column",
    }
});