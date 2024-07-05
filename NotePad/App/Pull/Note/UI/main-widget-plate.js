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
        position: 'relative',
        
        height: '100%',
        width: '100%',
        
        borderRadius: 30,
        backgroundColor: "#FAFAFA",
        // paddingHorizontal: 15,
        paddingTop: 25,
        paddingBottom: 35,
    }
});