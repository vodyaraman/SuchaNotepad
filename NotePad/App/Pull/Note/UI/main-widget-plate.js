import { StyleSheet, View } from "react-native";

const MainWidgetPlate = ({children}) => {
    <View style = { styles.MainWidgetPlateStyle}>
        {children}
    </View>
};

export default MainWidgetPlate;

const styles = StyleSheet.create({
    MainWidgetPlateStyle: {
        height: "70vh",
        width: "100%",
        borderRadius: 15,
        backgroundColor: "grey"
    }
});