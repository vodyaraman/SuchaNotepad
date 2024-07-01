import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

const BlockWithTitleBetweenLines = ({children, text='Group name', textBackground='#EC7171', textColor='white', lineColor='white', scroll=false}) => {
    return(
        <View style={styles.mainContainer}>
           <View >
                {scroll ? <ScrollView style={styles.scrollContainer} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>{children}</ScrollView> : <View style={styles.contentContainer}>{children}</View>}
            </View>
            
            <Text style={[styles.textStyle, {backgroundColor:textBackground, color:textColor}]}>{text}</Text>
        </View> 
    )
}

export default BlockWithTitleBetweenLines;

const styles = StyleSheet.create({
    mainContainer:{
       
    },

    contentContainer:{
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        gap: 25,

        borderColor: 'white',
        borderWidth: 1,
        
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyle:{
        fontSize: hg('2.3%'),
        alignSelf: 'center',
        top: hg('-1.5%'),
        position: 'absolute',
        paddingHorizontal: hg('3%'),
        fontWeight: 'bold',
        fontFamily: 'Montserrata-medium',
    },

    scrollContainer:{
        height: hg('20%'),
        padding: hg('1.5%'),

        borderColor: 'white',
        borderWidth: 1,
    },

    scrollContent:{
        height: '100%',
        gap: 50,
    }
})