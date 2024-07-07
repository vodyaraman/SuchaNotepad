import {View, StyleSheet} from 'react-native';
import {CustomText} from '../../Note'

const AnimatedModal = ({text, textColor}) => {
    return(
        <View style={styles.container}>
            <CustomText 
                textColor={textColor} 
                text={text} 
                textAlign={'center'}
                fontFamily={'Lexend-bold'}
                fontSize={18}
                numberOfLines={'auto'} />
        </View>
    )
}

export default AnimatedModal;

const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        backgroundColor: 'white',

        paddingHorizontal: 20,
        paddingVertical: 15,

        justifyContent: 'center',
        
        shadowColor: 'black',
        elevation: 9,
    },
})