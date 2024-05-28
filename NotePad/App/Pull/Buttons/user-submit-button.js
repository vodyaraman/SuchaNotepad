import {StyleSheet, Pressable} from 'react-native';
import { CustomText } from '../Note';
import { LinearGradient } from 'expo-linear-gradient';

const UserSubmitButton = ({textColor, text, fontSize, fontWeight, textAlign, onPressHandler}) => {
    const colors = ['#61ACCC', '#94D4EF']
    return(
        //{backgroundColor: pressed ? '#B4E8FF' : '#94D4EF'}, 
        <LinearGradient
            colors={colors}
            start={{x: -2, y: -5}}
            end={{x: 2, y: 5}}
            style={styles.button}>
            <Pressable onPress={(e) => onPressHandler(e)} style={({pressed}) => [ styles.button, {backgroundColor: pressed ? '#B4E8FF' : colors}]}>
                <CustomText textColor={textColor} text={text} fontSize={fontSize} textAlign={textAlign} fontWeight={fontWeight}/>
            </Pressable>
        </LinearGradient>    
    )
}

export default UserSubmitButton;

const styles = StyleSheet.create({
    button:{
        width: '100%',
        borderRadius: 25,
        paddingVertical: '2%',
    },
})