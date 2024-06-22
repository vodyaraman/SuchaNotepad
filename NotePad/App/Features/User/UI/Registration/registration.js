import React, {useState} from "react";
import { View, StyleSheet } from 'react-native';

import { UserEmailReg, UserUsernameReg, UserPasswordReg, UserPasswordRepeatReg, SubmitRegisterButton, UserBackground } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import {HelpTextButton} from "../../../../Entities/User";

import {AnimatedErrorModal} from "../../../../Entities/User";
import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";
import { useNavigation } from "@react-navigation/native";


const UserReg = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {checkRegisterForm, registerState} = useRegistration();
    const {error} = registerState;

    const navigation = useNavigation()

    const checkRegister = async () => {
        const status = await checkRegisterForm();
        
        if (status) {
            navigation.navigate('UserMailCode')
        }
    };
    
    return (
        <UserBackground>
            <View style={styles.alertContainer}>
                {error && error.map((err, index) => <AnimatedErrorModal key={index} text={err} setIsVisible={setIsVisible} isVisible={true} /> )}
            </View>
            
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
                <HelpTextButton textDesc={'Already have an acount?'} textButton={'Login'} />
            </View>
        </UserBackground>      
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
    alertContainer:{
        position: 'absolute', 
        zIndex: 5, 
        gap: 10, 
        width: '100%', 
        left: '10%', 
    },
})