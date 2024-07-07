import {StyleSheet, Pressable} from 'react-native';
import { CustomText } from '../Note';
import { LinearGradient } from 'expo-linear-gradient';

const UserSubmitButton = (
    {textColor, 
    text,
    fontFamily = 'Lexend-bold', 
    fontSize, 
    fontWeight, 
    textAlign='center', 
    onPressHandler,
    color1='#61ACCC',
    color2='#94D4EF'}
    ) => {
    const colors = [color1, color2]
    return(
        //{backgroundColor: pressed ? '#B4E8FF' : '#94D4EF'}, 
        <LinearGradient
            colors={colors}
            start={{x: -2, y: -5}}
            end={{x: 2, y: 5}}
            style={styles.button}>
            <Pressable onPress={(e) => onPressHandler(e)} style={({pressed}) => [ {backgroundColor: pressed ? '#B4E8FF' : colors}]}>
                <CustomText textColor={textColor} text={text} fontFamily={fontFamily} fontSize={fontSize} textAlign={textAlign} fontWeight={fontWeight}/>
            </Pressable>
        </LinearGradient>    
    )
}

export default UserSubmitButton;

const styles = StyleSheet.create({
    button:{
        width: '100%',
        borderRadius: 25,
        paddingVertical: 10,
    },
})