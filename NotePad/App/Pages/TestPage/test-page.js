import React from "react";
import { StyleSheet, View } from "react-native";
import { MainRegAuthPlate } from "../../Pull/User";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <MainRegAuthPlate />
    </View>
    
)};

export default TestPage;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        height: 0, //Поставил 0 потому что при рендере на странице этот гей растягивался на 100%
        position: 'relative',
        backgroundColor: "#94D4EF",
        flexDirection: "column",
    }
});