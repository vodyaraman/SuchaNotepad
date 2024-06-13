import { MailCodeInput, SubmitRegisterButton, HelpTextButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import React from 'react';

import { View, StyleSheet } from "react-native";

const UserMailCode = ({onPressHandler}) => {
    return(
        <View style={styles.container}>
            <RegAuthPlate>
                <MailCodeInput />
            </RegAuthPlate>
            <SubmitRegisterButton />
            <HelpTextButton onPressHandler={onPressHandler} textDesc={'Already have an acount?'} textButton={'Login'} />
        </View>
    )
}

export default UserMailCode

const styles = StyleSheet.create({
    container:{
        gap: 15,
    },
})