import { BackgroundItemPlate } from "../../../Pull/Group";
import { CustomText } from "../../../Pull/Note";
import {View, StyleSheet, Text, Pressable} from 'react-native';

import React, {useState} from 'react'

const ItemBlock = ({onPressHandler, groupName='Group1', ownerName='Owner1'}) => {
    const [textColor, setTextColor] = useState('#8A0596')

    return(
        <Pressable onPress={onPressHandler}>
            <BackgroundItemPlate 
            namePlace={<CustomText textColor={textColor} text={groupName} fontSize={20} fontWeight="bold" />}
            ownerPlace={
            <View style={styles.subContainer}>
                <CustomText textColor={textColor} text={ownerName} fontSize={18} />
                <Text style={styles.symbolText}>{'>'}</Text>
            </View>} />
        </Pressable>
    )
}

export default ItemBlock;

const styles = StyleSheet.create({
    subContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    symbolText:{
        fontWeight: '400',
        fontSize: 25,
    },
})