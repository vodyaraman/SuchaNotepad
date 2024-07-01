import React from 'react';
import { View,StyleSheet } from 'react-native';
import { BackgroundTitle } from '../../../Pull/Group';
import { CustomText } from '../../../Pull/Note';
//С этой залупой пока не понимаю что делать, но она есть если что

const Title = ({text='Group'}) => {
    return (
        <View style={styles.mainContainer}>
            <BackgroundTitle>
                <CustomText text={text} textColor={'#8B712E'} fontSize={20} fontWeight={'bold'} textAlign={"center"}/>
            </BackgroundTitle>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
    },
})

export default Title;