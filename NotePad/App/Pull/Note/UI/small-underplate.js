import { StyleSheet, View } from "react-native";

const SmallUnderplate = ({children}) => {
    return (
    <View style = {styles.Underplate}>
        {children}
    </View>
)};

export default SmallUnderplate;

const styles = StyleSheet.create({
    Underplate: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 15,
        backgroundColor: "#F8F8F8",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // Необходим для отображения теней в Android
    },
})