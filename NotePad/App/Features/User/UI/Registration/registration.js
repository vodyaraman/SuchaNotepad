import React, {useState, useEffect} from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

//Временный импорт
import {AnimatedErrorModal} from "../../../../Entities/User";
import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";


const UserReg = ({changeAuthHandler}) => {

    const [message, setMessage] = useState([])
    const [isVisible, setIsVisible] = useState(false)  
    const {serverError, setServerError} = useRegistration()

    useEffect(() => {
        if (serverError.length !== 0) {
            setMessage([...serverError])
            setIsVisible(true)
            setServerError([])
        }
    }, [serverError])

    
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
                <SubmitRegisterButton />
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