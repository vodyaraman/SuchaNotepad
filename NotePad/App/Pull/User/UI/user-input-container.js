import {View, Image, StyleSheet, Pressable} from 'react-native';
import { InputText } from '../../Note';

import {heightPercentageToDP as hg, widthPercentageToDP as wd} from 'react-native-responsive-screen';

const UserInputContainer = ({img, additImg=false, onImgPassPress=()=>{}, borderBottomColor, fontSize, fontFamily, placeholder, onChangeHandler, onBlurHandler, secureTextEntry=false}) => {
    return(
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image source={img} style={{resizeMode: 'center'}} />
          </View>
          {additImg && 
          <Pressable style={styles.additionalContainer} onPress={onImgPassPress}>
            <Image source={additImg} style={{resizeMode: 'center'}} />
          </Pressable>}
          <InputText 
            onChangeText={onChangeHandler} 
            borderBottomColor={borderBottomColor} 
            fontSize={fontSize} 
            fontFamily={fontFamily} 
            color={'white'} 
            placeholder={placeholder} 
            multiline={false} 
            secureTextEntry={secureTextEntry}
            onBlur={onBlurHandler} />
        </View>
    )
}

export default UserInputContainer;

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },

    imageContainer: {
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    additionalContainer: {
        position: 'absolute',
        top: -5,
        right: 10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})