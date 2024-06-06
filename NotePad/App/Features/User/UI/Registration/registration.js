import React, {useState} from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

//Временный импорт
import {AnimatedErrorModal} from "../../../../Entities/User";
import { OpeningAnim } from "../../../../Pull/User";

const UserReg = () => {
    const [message, setMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            {message && 
            <OpeningAnim isVisible={isVisible}>
                <AnimatedErrorModal text={message} />
            </OpeningAnim>}

            <View style={styles.mainContainer}>
                <RegAuthPlate>
                    <View style={styles.inputContainer}>
                        <UserEmailReg setMessage={setMessage} setIsVisible={setIsVisible} />
                        <UserUsernameReg setMessage={setMessage} setIsVisible={setIsVisible} />
                        <UserPasswordReg />
                        <UserPasswordRepeatReg />
                    </View>
                </RegAuthPlate>
                <SubmitRegisterButton />
                <HelpTextButton textDesc={'Already have an acount?'} textButton={'Login'} />
        </View>
        </>      
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