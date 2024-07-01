import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { ItemBlock, AnimatedSearchButton, Title } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

import { Show } from '../../../Processes/Navigation/Rules';

const Control = () => {

    const groupListResponse = [
        {groupName: 'Group1', owner:'User1', color: 'red'},
        {groupName: 'Group2', owner:'User2', color: 'green'},
        {groupName: 'Group3', owner:'User3', color: 'black'},
        {groupName: 'Group4', owner:'User4', color: 'yellow'},
        {groupName: 'Group5', owner:'User5', color: 'blue'},
        {groupName: 'Group6', owner:'User6', color: 'red'},
        {groupName: 'Group7', owner:'User7', color: 'green'},
        {groupName: 'Group8', owner:'User8', color: 'black'},
        {groupName: 'Group9', owner:'User9', color: 'yellow'},
        {groupName: 'Group10', owner:'User10', color: 'blue'},
        {groupName: 'Group11', owner:'User11', color: 'black'},
        {groupName: 'Group12', owner:'User12', color: 'red'},
        {groupName: 'Group13', owner:'User13', color: 'green'},
    ]

    const onPressHandler = () => {
        Show.OverlookGroup()
    }

    const groupListControlRender = (item, index) => {
        return(
            <ItemBlock 
                key={index} 
                groupName={item.groupName} 
                ownerName={item.owner} 
                fontColor={item.color}
                onPressHandler={onPressHandler} />
        )
    }

    return (
        <View style={styles.mainContainer}>
            <AnimatedSearchButton />
            
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
                {groupListResponse.map((item, index) => groupListControlRender(item,index))}
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
