import {View, Image, StyleSheet} from 'react-native';
import { InputText } from '../../Note';

import {heightPercentageToDP as hg, widthPercentageToDP as wd} from 'react-native-responsive-screen';

const UserInputContainer = ({img, fontSize, fontFamily, placeholder, onChangeHandler, secureTextEntry}) => {
    return(
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image source={img} style={{resizeMode: 'center'}} />
          </View>
          <InputText onChangeText={onChangeHandler} fontSize={fontSize} fontFamily={fontFamily} color={'white'} placeholder={placeholder} multiline={false} secureTextEntry={secureTextEntry} />
        </View>
    )
}

export default UserInputContainer;

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageContainer: {
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})