import React from "react";
import { StyleSheet, View } from "react-native";

const MainWidgetPlate = ({children, style}) => {
    return (
    <View style = { [styles.MainWidgetPlateStyle, style]}>
        {children}
    </View>
)};

export default MainWidgetPlate;

const styles = StyleSheet.create({
    MainWidgetPlateStyle: {
        zIndex: 1,
        minHeight: '97vh',
        maxHeight: '97vh',
        height: '100%',
        
        marginTop: '6%',
        
        width: "100%",
        borderRadius: 30,
        backgroundColor: "white",
    }
});