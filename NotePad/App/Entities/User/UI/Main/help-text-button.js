//Надпись с мини-кнопкой
import {View, StyleSheet, Pressable} from 'react-native';

import { CustomText } from "../../../../Pull/Note";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen'

const HelpTextButton = ({textDesc, textButton, onPressHandler}) => {
    return(
        <View style={styles.mainContainer}>
            <CustomText 
                textColor={'#C8C6C6'} 
                text={textDesc}
                fontSize={hg('2.3%')} 
                fontFamily='Lexend-bold' />
            <Pressable onPress={onPressHandler}>
                <CustomText textColor={'#61ACCC'} text={textButton} fontSize={hg('2.4%')} fontFamily='Lexend-bold'/>
            </Pressable>
        </View>
    )
}

export default HelpTextButton;

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
})