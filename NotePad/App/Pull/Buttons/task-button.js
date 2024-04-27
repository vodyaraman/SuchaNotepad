import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export function TaskButton(){
    
    return (
        <TouchableOpacity style={styles.taskButton} activeOpacity={0.7}>
            <Image source={require('./assets/plusTaskButton.png')} />
        </TouchableOpacity>
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