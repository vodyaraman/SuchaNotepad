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
        height: '10vh',
        display: 'flex',
        position: 'absolute',
        bottom: '7%',

        flexDirection: 'row',
        justifyContent: 'space-between',

        zIndex: 5,
    },
})

export default NavigationPlate;