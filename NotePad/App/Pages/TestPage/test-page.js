import React from "react";
import { StyleSheet, View } from "react-native";
import { RegAndAuth } from "../../Widgets";

//Импорты компонентов из окон авторизации и регистрации
import { UserButton } from "../../Pull/Buttons";
import { StartEntryPage } from "../UserEntrypoint/StartEntryPage/start-entry-page";
import { SubmitRegisterButton } from "../../Entities/User";
import { MainRegAuthPlate } from "../../Pull/User";

const TestPage = () => {
    return (
    <View style = { styles.TestPageStyle}>
        {/* <RegAndAuth/> */}
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