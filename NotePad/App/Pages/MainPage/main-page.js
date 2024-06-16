import React from "react";
import { StyleSheet, View } from "react-native";

import RegAndAuth from "../../Widgets/User/registration-authentication";

//Импорт провайдера авторизации и регистрации
import { AuthProvider } from "../../Entities/User/Helpers/user-manager";

const MainPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        <AuthProvider >
            <RegAndAuth />
        </AuthProvider>
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