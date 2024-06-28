import { SearchButton } from "../../../Pull/Group";
import { InputAnim } from "../../../Pull/Group/UI/animated-input";
import {View, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const AnimatedSearchButton = ({text="Enter group name:"}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [focus, setFocus] = useState(false)

    const onPressHandler = () => {
        setIsVisible(!isVisible)
        setFocus(!focus)
    }

    return(
        <View style={styles.mainContainer}>
            <InputAnim isVisible={isVisible}>
                <TextInput placeholderTextColor={'#ABABAB'} placeholder={text} style={[styles.input, focus && styles.focusedInput]} />
            </InputAnim>
            <SearchButton onPressHandler={onPressHandler} />
        </View>
    )
}

export default AnimatedSearchButton;

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        marginBottom: 20,    
        width: '100%',
    },

    input:{
        backgroundColor: 'white',
        borderRadius: 15,

        paddingVertical: 7,
        paddingHorizontal: 17,

        fontSize: 16,
        fontFamily: 'Montserrata-medium',
        direction: 'rtl',
    },

    focusedInput: {
        outlineStyle: 'none'
    },
})