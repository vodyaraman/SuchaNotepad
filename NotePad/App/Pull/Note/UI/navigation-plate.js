import { SafeAreaView, StyleSheet } from "react-native";

const NavigationPlate = ({children}) => {
    return(
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '6vh',
        position: 'relative',

        flexDirection: 'row',
        justifyContent: 'space-between',

        zIndex: 5,
    },
})

export default NavigationPlate;