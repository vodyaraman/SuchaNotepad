import {View, StyleSheet, Image} from 'react-native';
import CustomText from './custom-text';

const EmptyMessage = ({img, firstLineText='', secondLineText=''}) => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <CustomText text={firstLineText} fontSize={20} textColor={'#000'} />
                <CustomText text={secondLineText} fontSize={16} textColor={'#BEBEBE'} />
                {img && <Image source={img} style={{height: 45, width: 45}} />}
            </View> 
            
        </View>
    )
}

export default EmptyMessage;

const styles = StyleSheet.create({
    mainContainer:{
        height: '100%',
        justifyContent: 'center',
        
    },
    subContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
    },
})