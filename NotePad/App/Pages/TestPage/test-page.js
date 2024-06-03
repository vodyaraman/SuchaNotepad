import React from "react";
import { StyleSheet, View } from "react-native";

import RegAndAuth from "../../Widgets/User/registration-authentication";

//Импорт провайдера авторизации и регистрации
import { AuthProvider } from "../../Entities/User/Helpers/user-manager";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <AuthProvider >
            <RegAndAuth />
        </AuthProvider>
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