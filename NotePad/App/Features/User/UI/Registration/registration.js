import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton, UserBackground, HelpTextButton, AnimatedErrorModal } from "../../../../Entities/User";
import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";
import { Show } from "../../../../Processes/Navigation/Rules";
import { UserBackgroundPlate } from "../../../../Pull/User";

const UserReg = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { checkRegisterForm, registerState: { error } } = useRegistration();

    const checkRegister = async () => {
        const status = await checkRegisterForm();
        if (status) {
            Show.EmailCode();
    }};

    useEffect(()=>{
        if (error.length !== 0) {
            setIsVisible(true)
        }
    }, [error])
    
    return (
        <UserBackground>
            <View style={styles.alertContainer}>
                {error && error.map((err, index) => (
                    <AnimatedErrorModal key={index} text={err} setIsVisible={setIsVisible} isVisible={isVisible} />
                ))}
            </View>
            <View style={styles.mainContainer}>
                
                <UserBackgroundPlate >
                    <UserEmailReg setIsVisible={setIsVisible} />
                    <UserUsernameReg setIsVisible={setIsVisible} />
                    <UserPasswordReg />
                    <UserPasswordRepeatReg />
                </UserBackgroundPlate>
                
                
                <SubmitRegisterButton onPressHandler={checkRegister} />
                <HelpTextButton 
                    textDesc={'Already have an account?'} 
                    textButton={'Login'} 
                    onPressHandler={ () => { Show.Authorisation() } }
                />
            </View>
        </UserBackground>
    );
};

export default UserReg;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        gap: 15,
    },
    inputContainer: {
        gap: 20,
    },
    alertContainer: {
        position: 'absolute',
        zIndex: 5,
        gap: 10,
        width: '80%',
        left: '10%',
    },
});
