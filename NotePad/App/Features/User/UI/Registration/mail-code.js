import { MailCodeInput, SubmitRegisterButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";
import {AnimatedErrorModal} from "../../../../Entities/User";

import React, { useState, useEffect } from 'react';

import { View, StyleSheet } from "react-native";

import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";

const UserMailCode = () => {
    const {register, registerState} = useRegistration()
    const {error} = registerState;
    
    const [isVisible, setIsVisible] = useState(false) 

    const [values, setValues] = useState(Array(4).fill('')) //Для того чтобы использовать элементы массива для обработки onChange события на инпуте
    const [borderBottomColor, setBorderColor] = useState('white')
    const status = values.every(el => el !== '')

    useEffect(() => {
        if (status) {
            setBorderColor('white')
        }
        error.length !== 0 ? setBorderColor('red') : setBorderColor('white')
        
    }, [status, error])
    
    const onPressHandler = async () => {
        if(status){
            const code = values.join('')
            register(code)
        } else{
            setBorderColor('red')
        }
    }
    
    return(
        <>
            {error && error.map((err, index) => <AnimatedErrorModal key={index} text={err} setIsVisible={setIsVisible} isVisible={true} />)}
            <View style={styles.container}>
                <RegAuthPlate>
                    <MailCodeInput values={values} setValues={setValues} borderBottomColor={borderBottomColor} />
                </RegAuthPlate>
                <SubmitRegisterButton onPressHandler={onPressHandler} /> 
            </View>
        </>
    )
}

export default UserMailCode

const styles = StyleSheet.create({
    container:{
        gap: 15,
    },
})