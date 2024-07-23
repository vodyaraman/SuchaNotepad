import {View, StyleSheet, Image} from 'react-native';
import userBackgroundImg from '@/../../assets/user-entrypoint-bg.png'
import {widthPercentageToDP as wd, heightPercentageToDP as hg} from 'react-native-responsive-screen';

const UserEntrypointPlate = ({children}) => {
    return(
        <View style={styles.plate}>
            <Image source={userBackgroundImg} style={{height: hg('35%'), width: wd('100%'), resizeMode: 'stretch', position: 'absolute', top:0}}/>
            {children}
        </View>
    )
}

export default UserEntrypointPlate;

const styles = StyleSheet.create({
    plate:{
        height: hg('100%'),
        width: wd('100%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
    },
})