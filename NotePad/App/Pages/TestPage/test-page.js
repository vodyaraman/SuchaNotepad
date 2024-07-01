import React from "react";
import { StyleSheet, View } from "react-native";

import {Authentication} from "../../Widgets";

//Импорт провайдера авторизации и регистрации
import { AuthProvider } from "../../Entities/User/Helpers/user-manager";

//Импорт навигации по авторизации/регистрации
import { AuthNavigation } from "../../Processes/Navigation";

//Временный импорт
import { MainWidgetPlate } from "../../Pull/Note";
import { Control, Create, Overlook } from "../../Features/Group";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        {/* <AuthProvider >
            <AuthNavigation/>
        </AuthProvider> */}
        <MainWidgetPlate>
            <Overlook />
        </MainWidgetPlate>
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