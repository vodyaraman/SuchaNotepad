import {View, StyleSheet} from 'react-native';
import React from 'react';

const BackgroundItemPlate = ({children, bgColor = 'white', namePlace = null, ownerPlace = null}) => {
    return(
        <View style={[styles.mainContainer, {backgroundColor: bgColor}]}> 
            {namePlace && <View>{namePlace}</View>}
            {ownerPlace && <View>{ownerPlace}</View>}
            {children}
        </View>
    )
}

export default BackgroundItemPlate;

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius: 25,
        padding: 15,

        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        shadowOffset: {width: 0, height: 2},  
        shadowColor: '#171717',  
        shadowOpacity: 0.3,  
        shadowRadius: 3,  
    },
})