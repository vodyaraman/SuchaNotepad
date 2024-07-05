import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { ItemBlock, AnimatedSearchButton } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

import { Show } from '../../../Processes/Navigation/Rules';

const Control = () => {

    const groupListResponse = []

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
        paddingHorizontal: 15,
    },

    scrollContainer:{
        borderRadius: 25, 
    },

    scrollContentContainer:{
        height: '100%',
    }
})
