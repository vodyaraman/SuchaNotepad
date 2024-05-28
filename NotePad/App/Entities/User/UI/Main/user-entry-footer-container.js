import {View, StyleSheet, Image, Pressable} from 'react-native';
import { TextBetweenLine } from '../../../../Pull/Note';

const UserEntryFooterContainer = ({img1, img2, img3, onPressHandler}) => {
    return(
        <View style={Styles.container}>
            <View>
                <TextBetweenLine text={'or'} lineWidth='100%' />
            </View>
            <View style={Styles.imgContainer}>
                <View>
                    <Pressable onPress={(e) => onPressHandler(e)}>
                        <Image source={img1}/>
                    </Pressable>
                </View>
                
                <View>
                    <Pressable onPress={(e) => onPressHandler(e)}>
                        <Image source={img2}/>
                    </Pressable>
                </View>
                
                <View>
                    <Pressable onPress={(e) => onPressHandler(e)}>
                        <Image source={img3}/>
                    </Pressable>
                </View>  
            </View>
        </View>
    )
}

export default UserEntryFooterContainer;

const Styles = StyleSheet.create({
    container:{
        width: '50%',
        justifyContent: 'center',
    },

    imgContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
})
