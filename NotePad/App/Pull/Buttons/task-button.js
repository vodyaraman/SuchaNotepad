import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

export function TaskButton(){
    
    return (
        <Pressable style={({pressed})=>[styles.taskButton, {opacity: pressed ? 0.7 : 1}]} >
            <Image source={require('../../../assets/plusTaskButton.png')} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    taskButton: {
        backgroundColor: '#FFF4C4',
        height: 90,
        width: 90,

        borderRadius: 50,
        
        alignItems: 'center',
        justifyContent: 'center',
    }
})