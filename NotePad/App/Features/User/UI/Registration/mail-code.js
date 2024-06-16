import { MailCodeInput, SubmitRegisterButton, HelpTextButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import React, { useState } from 'react';

import { View, StyleSheet } from "react-native";

import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";

const UserMailCode = () => {
    const {register, checkEmailCode} = useRegistration()
    const [isActivate, setActivate] = useState(false)
    const [values, setValues] = useState(Array(4).fill('')) //Для того чтобы использовать элементы массива для обработки onChange события на инпуте
    const status = values.every(el => el !== '')
    
    const onPressHandler = () => {
        
        if(!status){
            console.log('Введен неправильный код!')
        } else if(!isActivate){
            checkEmailCode()
        }
    }
    
    return(
        <View style={styles.container}>
            <RegAuthPlate>
                <MailCodeInput values={values} setValues={setValues} />
            </RegAuthPlate>
            <SubmitRegisterButton onPressHandler={onPressHandler} /> 
        </View>
    )
}

export default UserMailCode

const styles = StyleSheet.create({
    container:{
        gap: 15,
    },
})