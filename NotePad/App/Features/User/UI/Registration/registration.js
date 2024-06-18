import React, {useState, useEffect} from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

import {AnimatedErrorModal} from "../../../../Entities/User";
import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";


const UserReg = ({changeAuthHandler, MailCodeWindow}) => {

    const [message, setMessage] = useState([])
    const [isVisible, setIsVisible] = useState(false)  
    const {serverError, setServerError, checkRegisterForm} = useRegistration()

    useEffect(() => {
        if (serverError.length !== 0) {
            setMessage([...serverError])
            setServerError([])
            setIsVisible(true)
            
        }
    }, [serverError])

    const checkRegister = () => {
        checkRegisterForm()
        
        // MailCodeWindow()
    }
    
    return (
        <>
            {message && message.map((message, index) => <AnimatedErrorModal key={index} text={message} setIsVisible={setIsVisible} setMessage={setMessage} isVisible={isVisible} /> )}
            
            <View style={styles.mainContainer}>
                <RegAuthPlate>
                    <View style={styles.inputContainer}>
                        <UserEmailReg message={message} setMessage={setMessage} setIsVisible={setIsVisible} />
                        <UserUsernameReg message={message} setMessage={setMessage} setIsVisible={setIsVisible} />
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