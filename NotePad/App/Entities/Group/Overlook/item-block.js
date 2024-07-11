import { BackgroundItemPlate } from "../../../Pull/Group";
import { CustomText } from "../../../Pull/Note";
import {View, StyleSheet, Text, Pressable} from 'react-native';

import React, {useState} from 'react'

const ItemBlock = ({id, onPressHandler, groupName='Group1', ownerName='Owner1', fontColor='#8A0596'}) => {
    const [textColor, setTextColor] = useState(fontColor)
    //Подумать над логикой отображения, возможно в данном варианте удобнее будет с уровня Feature прокинуть пропсами данные
    return(
        <Pressable onPress={() => onPressHandler(id)} style={({pressed})=>[{marginBottom: 15, opacity: pressed ? 0.7 : 1}]} >
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