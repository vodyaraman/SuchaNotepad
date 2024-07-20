import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

const TaskButton = ({ handleClick, img, backgroundColor = '#FFF4C4' }) => {
    
    return (
        <Pressable style={({pressed})=>[styles.taskButton, {opacity: pressed ? 0.7 : 1, backgroundColor: backgroundColor}]} 
        onPress={handleClick}>
            <Image  source={img} />
        </Pressable>
    );
};

export default TaskButton;

const styles = StyleSheet.create({
    taskButton: {
        borderRadius: 50,
       
        alignItems: 'center',
        justifyContent: 'center',

        shadowOffset: {width: 0, height: 2},  
        shadowColor: '#171717',  
        shadowOpacity: 0.3,  
        shadowRadius: 3,
    },  
})