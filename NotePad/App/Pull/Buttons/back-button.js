import {Pressable, StyleSheet, Image} from 'react-native';
import backButtonIcon from '@../../../assets/back-button.png'

import { heightPercentageToDP as hg, widthPercentageToDP as wd } from 'react-native-responsive-screen';

const BackButton = ({onPressHandler = () => console.log('Нажата кнопка назад')}) => {
    return(
        <Pressable style={styles.mainContainer} onPress={onPressHandler}>
            <Image source={backButtonIcon} style={{height: wd('9%'), maxHeight: 45}} />
        </Pressable>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        left: '1%',
        top: '3%'
    }
})