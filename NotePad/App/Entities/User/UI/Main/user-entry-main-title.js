import {View, StyleSheet} from 'react-native';
import { CustomText } from '../../../../Pull/Note';
import {widthPercentageToDP as wd, heightPercentageToDP as hg} from 'react-native-responsive-screen';

const UserEntryMainTitle = () => {
    return(
        <View style={styles.title}>
            <CustomText 
                text={'Start your planning'}
                textColor={'white'} 
                fontWeight='bold' 
                textAlign='center' 
                fontSize={hg('6%')} 
                numberOfLines={2}/>
            <View style={{marginTop: '3%'}}>
                <CustomText
                    text={'with the NotePad'} 
                    textColor={'white'} 
                    textAlign='center' 
                    fontSize={hg('2.5%')} />
            </View>
        </View>      
    )
}

export default UserEntryMainTitle;

const styles = StyleSheet.create({
    title:{
        width: wd('100%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
})