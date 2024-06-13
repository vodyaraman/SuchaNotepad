import React from "react";
import { View, StyleSheet } from 'react-native';

import {UserProvider, UserLogin, UserPassword, UserSubmit } from "../../../../Entities/User"
import { RegAuthPlate } from "../../../../Pull/User";
import {HelpTextButton} from "../../../../Entities/User";


// Да, код регистрации и авторизации повторяется в двух файлах, здесь я хочу подчернуть
// что все комопненты, используемые тут, должны использоваться либо на этом слое, либо ниже
// а также что в этих файлах можно менять, например, футер или шапку сайта по желанию для
// логина и регистрации отдельно
// А ещё я как-бы хочу сюда инпуты вставить, так что это полностью оправданно

const UserAuth = ({onPressHandler}) => {
    const onPressHandler1 = (event) => {
        console.log(event.target)
    }

    const onChangeInputLogin = () => {
        console.log('Login input')
    }

    const onChangeInputPassword = () => {
        console.log('Password input')
    }

    return (            
        <View style={styles.mainContainer}>
            <RegAuthPlate>
                <View style={styles.inputContainer}>
                    <UserLogin onChangeHandler={onChangeInputLogin} />
                    <UserPassword onChangeHandler={onChangeInputPassword} />
                </View>
            </RegAuthPlate>
            <UserSubmit onPressHandler={onPressHandler1} />
            <HelpTextButton textDesc={'Don\'t have an account yet?'} textButton={'Register'} onPressHandler={onPressHandler} />
        </View>   
    );
};

export default UserAuth;

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        gap: 15,
    },
    inputContainer:{
        gap: 40,
    },
})