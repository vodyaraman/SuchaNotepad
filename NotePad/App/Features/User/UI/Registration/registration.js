import React, {useState, useEffect} from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

import {AnimatedErrorModal} from "../../../../Entities/User";
import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";


const UserReg = ({changeAuthHandler, MailCodeWindow}) => {

    const [isVisible, setIsVisible] = useState(false)  
    const {checkRegisterForm, registerState} = useRegistration()
    const {error} = registerState

    const checkRegister = async () => {
        const status = await checkRegisterForm();
        
        if (status) {
            MailCodeWindow()
        }
    }
    
    return (
        <>
            
            {error && error.map((err, index) => <AnimatedErrorModal key={index} text={err} setIsVisible={setIsVisible} isVisible={true} /> )}
            
            <View style={styles.mainContainer}>
                <RegAuthPlate>
                    <View style={styles.inputContainer}>
                        <UserEmailReg setIsVisible={setIsVisible} />
                        <UserUsernameReg setIsVisible={setIsVisible} />
                        <UserPasswordReg />
                        <UserPasswordRepeatReg />
                    </View>
                </RegAuthPlate>
                <SubmitRegisterButton onPressHandler={checkRegister} />
                <HelpTextButton onPressHandler={changeAuthHandler} textDesc={'Already have an acount?'} textButton={'Login'} />
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