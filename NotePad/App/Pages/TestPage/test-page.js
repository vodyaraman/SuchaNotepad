import React from "react";
import { StyleSheet, View } from "react-native";

import {Authentication} from "../../Widgets";

//Импорт провайдера авторизации и регистрации
import { AuthProvider } from "../../Entities/User/Helpers/user-manager";

//Временный импорт
import { AuthNavigation } from "../../Processes/Navigation";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <AuthProvider >
            <AuthNavigation/>
        </AuthProvider>
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
    }
});