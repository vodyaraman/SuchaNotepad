import { MailCodeInput, SubmitRegisterButton, HelpTextButton } from "../../../../Entities/User";
import { RegAuthPlate } from "../../../../Pull/User";

import React, { useState } from 'react';

import { View, StyleSheet } from "react-native";

import { useRegistration } from "../../../../Entities/User/Helpers/user-manager";

const UserMailCode = () => {
    const {register} = useRegistration()

    const [values, setValues] = useState(Array(4).fill('')) //Для того чтобы использовать элементы массива для обработки onChange события на инпуте
    const status = values.every(el => el !== '')
    
    const onPressHandler = async () => {
        
        if(status){
            const code = values.join('')
            register(code)
            
        } else{
            console.log('Проверьте правильность ввода')
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