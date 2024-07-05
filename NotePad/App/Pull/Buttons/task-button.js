import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

const TaskButton = ({ handleClick, img }) => {
    
    return (
        <Pressable style={({pressed})=>[styles.taskButton, {opacity: pressed ? 0.7 : 1}]} 
        onPress={handleClick}>
            <Image  source={img} />
        </Pressable>
    );
};

export default TaskButton;

const styles = StyleSheet.create({
    taskButton: {
        backgroundColor: '#FFF',
        height: 70,
        width: 70,
        borderRadius: 35,
       
        alignItems: 'center',
        justifyContent: 'center',
    },

    
})