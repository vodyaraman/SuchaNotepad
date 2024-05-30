import React from "react";
import { StyleSheet, View } from "react-native";
import { UserLogin } from "../../Entities/User";


const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <UserLogin />
    </View>
    
)};

export default TestPage;

const styles = StyleSheet.create({
    TestPageStyle: {
        zIndex: 0,
        width: '100%',
        height: '25%', //Поставил 0 потому что при рендере на странице этот гей растягивался на 100%
        position: 'relative',
        backgroundColor: "red",
        flexDirection: "column",
    }
});