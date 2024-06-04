import {View, StyleSheet} from 'react-native';
import {CustomText} from '../../../../Pull/Note'

const AnimatedErrorModal = ({text = 'User with this email already exists!'}) => {
    return(
        <View style={styles.container}>
            <CustomText 
                textColor={'#EC7171'} 
                text={text} 
                textAlign={'center'}
                fontFamily={'Lexend-bold'}
                fontSize={18}
                numberOfLines={'auto'} />
        </View>
    )
}

export default AnimatedErrorModal;

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: '80%',
        borderRadius: 25,
        backgroundColor: 'white',

        paddingHorizontal: 20,
        paddingVertical: 15,

        justifyContent: 'center',
        
        shadowColor: 'black',
        elevation: 9,
    },
})
