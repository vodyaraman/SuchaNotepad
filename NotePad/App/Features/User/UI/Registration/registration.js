import React from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

const UserReg = () => {

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
            <SubmitRegisterButton />
            <HelpTextButton textDesc={'Already have an acount?'} textButton={'Login'} />
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