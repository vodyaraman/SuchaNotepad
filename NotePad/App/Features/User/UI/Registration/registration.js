import React from "react";
import { UserEntryLoginButton, UserEntryRegisterButton, UserEntryMainTitle, UserProvider } from "../../../../Entities/User"
import { View, StyleSheet } from 'react-native';
import { UserEntryFooterContainer } from "../../../../Entities/User";

// Да, код регистрации и авторизации повторяется в двух файлах, здесь я хочу подчернуть
// что все комопненты, используемые тут, должны использоваться либо на этом слое, либо ниже
// а также что в этих файлах можно менять, например, футер или шапку сайта по желанию для
// логина и регистрации отдельно
// А ещё я как-бы хочу сюда инпуты вставить, так что это полностью оправданно

const UserReg = () => {
    const onPressHandler = (event) => {
        console.log(event.target)
    }

    return (
        <UserProvider>
            <UserEntryMainTitle/>
            <View style={Styles.buttonsContainer}>
                <UserEntryLoginButton onPressHandler={onPressHandler} />
                <UserEntryRegisterButton onPressHandler={onPressHandler} />
            </View>
            <UserEntryFooterContainer onPressHandler={onPressHandler} />
        </UserProvider>
    );
};

export default UserReg;

const Styles = StyleSheet.create({
    buttonsContainer:{
        width: '60%',
    },
})