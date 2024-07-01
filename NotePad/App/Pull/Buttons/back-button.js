import {Pressable, StyleSheet, Image} from 'react-native';
import backButtonIcon from '@../../../assets/back-button.png'

import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

const BackButton = ({onPressHandler = () => console.log('Нажата кнопка назад')}) => {
    return(
        <Pressable style={styles.mainContainer} onPress={onPressHandler}>
            <Image source={backButtonIcon} style={{height: hg('4.6%'), width: hg('4.6%')}} />
        </Pressable>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        top: hg('-3%'),
        left: hg('-3%')
    }
})