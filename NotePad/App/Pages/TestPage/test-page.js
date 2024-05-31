import React from "react";
import { StyleSheet, View } from "react-native";

import RegAndAuth from "../../Widgets/User/registration-authentication";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <RegAndAuth />
    </View>
    
)};

export default TestPage;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        height: 0, //Поставил 0 потому что при рендере на странице этот гей растягивался на 100%
        position: 'relative',
        flexDirection: "column",
    }
});