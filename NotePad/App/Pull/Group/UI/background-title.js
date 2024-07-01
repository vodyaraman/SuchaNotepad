import {View, StyleSheet} from 'react-native';

const BackgroundTitle = ({children}) => {
    return (
        <View style={styles.mainContainer}>
            {children}
        </View>
    )
}

export default BackgroundTitle;

const styles = StyleSheet.create({
    mainContainer:{
        borderRadius: 25,
        backgroundColor: '#FFFFFF',

        paddingVertical: 8,
        paddingHorizontal: 15,

        shadowOffset: {width: 0, height: 2},  
        shadowColor: '#171717',  
        shadowOpacity: 0.3,  
        shadowRadius: 3,
    },
})