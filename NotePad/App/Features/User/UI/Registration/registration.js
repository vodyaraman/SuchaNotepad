import React from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

// Да, код регистрации и авторизации повторяется в двух файлах, здесь я хочу подчернуть
// что все комопненты, используемые тут, должны использоваться либо на этом слое, либо ниже
// а также что в этих файлах можно менять, например, футер или шапку сайта по желанию для
// логина и регистрации отдельно
// А ещё я как-бы хочу сюда инпуты вставить, так что это полностью оправданно

const UserReg = ({onPressHandler}) => {
    const onPressHandler1 = (event) => {
        console.log(event.target)
    }

    return (
        // <UserProvider>
        <View style={styles.mainContainer}>
            <RegAuthPlate>
                <View style={styles.inputContainer}>
                    <UserEmailReg />
                    <UserUsernameReg />
                    <UserPasswordReg />
                    <UserPasswordRepeatReg />
                </View>
            </RegAuthPlate>
            <SubmitRegisterButton onPressHandler={onPressHandler1} />
            <HelpTextButton textDesc={'Already have an acount?'} textButton={'Login'} onPressHandler={onPressHandler} />
        </View>
        // </UserProvider>
    );
};

export default UserReg;

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        gap: 15,
    },
    inputContainer:{
        gap: 20,
    },
})