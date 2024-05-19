import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';

const TaskButton = ({ handleClick, img }) => {
    
    return (
        <Pressable style={({pressed})=>[styles.taskButton, {opacity: pressed ? 0.7 : 1}]} 
        onPress={handleClick}>
            <Image style={styles.ImageInButton} source={img} />
        </Pressable>
    );
};

export default TaskButton;

const styles = StyleSheet.create({
    taskButton: {
        backgroundColor: '#FFF4C4',
        height: '9.5vh',
        width: '20vw',

        borderRadius: 50,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImageInButton: {
        height: 30,
        width: 30,
        objectFit: 'fill',
      },
})