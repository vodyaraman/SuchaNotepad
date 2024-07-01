import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { ItemBlock, AnimatedSearchButton, Title } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

const Control = () => {
    return (
        <View style={styles.mainContainer}>
            <Title />
            <AnimatedSearchButton />
            
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
                <ItemBlock />
                <ItemBlock fontColor='red' />
                <ItemBlock fontColor='green' />
                <ItemBlock fontColor='black' />
                <ItemBlock fontColor='yellow' />
                <ItemBlock fontColor='blue' />
                <ItemBlock />
                <ItemBlock fontColor='red' />
                <ItemBlock fontColor='green' />
                <ItemBlock fontColor='black' />
                <ItemBlock fontColor='red' />
                <ItemBlock fontColor='green' />
                <ItemBlock fontColor='black' />
            </ScrollView>
        </View>   
    );
};

export default Control;

const styles = StyleSheet.create({
    mainContainer:{
        height: hg('72%'),
    },

    scrollContainer:{
        borderRadius: 25,
    },

    scrollContentContainer:{
        height: '100%',
    }
})
