import { RegAuthPlate } from "../../../../Pull/User";
import { CustomText} from "../../../../Pull/Note";

import {View, StyleSheet, TextInput} from 'react-native';
import React,{useRef, useState} from 'react';

import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

const MailCode = () => {
    const input1 = React.createRef(),
          input2 = React.createRef(),
          input3 = React.createRef(),
          input4 = React.createRef();

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    
    const inputConf = [
        {ref: input1, value: value1, onChangeHandler: (value) => setValue1(value) },
        {ref: input2, value: value2, onChangeHandler: (value) => setValue2(value) },
        {ref: input3, value: value3, onChangeHandler: (value) => setValue3(value) },
        {ref: input4, value: value4, onChangeHandler: (value) => setValue4(value) },
    ]


    const [isFocused, setIsFocused] = useState(false);
    const onBlurAction = () => {
        setIsFocused(false)
    }

    const onKeyPress = (event) => { //Функция разрешающая только ввод цифр и использование клавиши Backspace
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    return(
        <RegAuthPlate>
            <CustomText 
                text={'Enter the confirmation code sent to your email:'}
                textColor={'white'}
                numberOfLines={2}
                textAlign={'center'}
                fontFamily={'Lexend-medium'}
                fontSize={hg('2.3%')} />

            <View style={styles.codeContainer}>
                {inputConf.map((n, i) =>(
                    <TextInput
                        value={n.value}
                        key={i}
                        ref={n.ref}
                        onChangeText={n.onChangeHandler(n.value)}

                        keyboardType={'numeric'}
                        placeholder={''}
                        maxLength={1}
                        onKeyPress={(e) => onKeyPress(e)}
                        style={[styles.input, isFocused && styles.focusedInput]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={onBlurAction}
                    />
                ))}
            </View>
        </RegAuthPlate>
    )
}

export default MailCode;

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