import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

const TaskButton = ({ onPress }) => {
    
    return (
        <Pressable style={({pressed})=>[styles.taskButton, {opacity: pressed ? 0.7 : 1}]} 
        onPress={onPress}>
            <Image source={require('../../../assets/plusTaskButton.png')} />
        </Pressable>
    );
};

export default TaskButton;

const styles = StyleSheet.create({
    taskButton: {
        backgroundColor: '#FFF4C4',
        height: '12vh',
        width: '24vw',

        borderRadius: 50,
        
        alignItems: 'center',
        justifyContent: 'center',
    }
})