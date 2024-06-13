import { RegAuthPlate } from "../../../../Pull/User";
import { CustomText} from "../../../../Pull/Note";

import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import React,{useRef, useState} from 'react';

import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

const MailCodeInput = () => {
    const [values, setValues] = useState(Array(4).fill('')) //Для того чтобы использовать элементы массива для обработки onChange события на инпуте
    const inputRefs = useRef([]); //Для того чтобы создать массив всех инпутов и ссылаться на определенный из них в атрибуте компонента

    const [isFocused, setIsFocused] = useState(false);
    const onBlurAction = () => {
        setIsFocused(false)
    }

    const onKeyPress = (event) => { //Функция разрешающая только ввод цифр и использование клавиши Backspace
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    const onChangeHandler = ({target}) => { //Функция в которой происходит вся магия
        let index = target.id;
        const value = target.value
        
        setValues(values.map((n, i) => index == i ? value : n))

        if(index < values.length - 1 && value){
            inputRefs.current[++index].focus()
        }
    }

    return(
        <>
            <CustomText 
                text={'Enter the confirmation code sent to your email:'}
                textColor={'white'}
                numberOfLines={2}
                textAlign={'center'}
                fontFamily={'Lexend-medium'}
                fontSize={hg('2.3%')} />

            <View style={styles.codeContainer}>
                {values.map((n, i) =>(
                    <TextInput
                        key={i}
                        id={i}
                        ref={input => inputRefs.current[i] = input}
                        keyboardType={'numeric'}
                        onChange={onChangeHandler}
                        placeholder={''}
                        maxLength={1}
                        onKeyPress={(e) => onKeyPress(e)}
                        style={[styles.input, isFocused && styles.focusedInput]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={onBlurAction}
                    />
                ))}
            </View>
        </>
    )
}

export default MailCodeInput;

const styles = StyleSheet.create({
    codeContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    },

    input:{
        height:hg('25%'),
        fontSize:hg('9%'),
        lineHeight:hg('24%'),
        color:'white',
        textAlign:'center',
        width: '100%',
        paddingLeft: '3.5%',
        paddingRight: '3.5%',
        paddingBottom: 5,
        backgroundColor: 'transparent',
        borderBottomColor: 'white',
        borderBottomWidth: hg('0.2%'),
    },

    focusedInput: {
        outlineStyle: 'none'
    },
})