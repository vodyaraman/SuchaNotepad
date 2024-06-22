import { RegAuthPlate } from "../../../../Pull/User";
import { CustomText} from "../../../../Pull/Note";

import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import React,{useRef, useState} from 'react';

import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

const MailCodeInput = ({values, setValues, borderBottomColor = 'white'}) => {
    
    const inputRefs = useRef([]); //Для того чтобы создать массив всех инпутов и ссылаться на определенный из них в атрибуте компонента

    const [isFocused, setIsFocused] = useState(false);
    const onBlurAction = () => {
        setIsFocused(false)
    }

    const onChangeHandler = ({target}) => { //Функция в которой происходит вся магия
        let start = target.selectionStart;
        let end = target.selectionEnd;

        let index = target.id;
        target.value = target.value.toUpperCase()

        target.setSelectionRange(start, end);
        const value = target.value
        
        setValues(values.map((n, i) => index == i ? value.toUpperCase() : n))

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
                        style={[styles.input, isFocused && styles.focusedInput, {borderBlockColor:borderBottomColor}]}
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
        height:hg('23%'),
        fontSize:hg('7.5%'),
        lineHeight:hg('22%'),
        color:'white',
        textAlign:'center',
        width: '100%',
        paddingBottom: 5,
        backgroundColor: 'transparent',
        borderBottomWidth: hg('0.2%'),
    },

    focusedInput: {
        outlineStyle: 'none'
    },
})