import { Image, View, StyleSheet, Pressable } from "react-native";
import { CustomText } from "../../Note";

import { heightPercentageToDP as hg } from "react-native-responsive-screen";

const ItemContainerWithImg = ({img, text='GroupName_1', onPressHandler}) => {
    return(
        <View style={styles.mainContainer}>
            <CustomText text={text} fontSize={hg('2.2%')} fontWeight='bold' fontFamily='Lexend-Bold' />
            <Pressable style={styles.imgContainer} onPress={onPressHandler}>
                <Image source={img} style={{height: hg('5%'), width: hg('5%')}} />
            </Pressable>
        </View>
    )
}

export default ItemContainerWithImg;

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        position: 'relative',
    },

    imgContainer:{
        position: 'absolute',
        right: '0%',
        alignSelf: 'center'
    },
})