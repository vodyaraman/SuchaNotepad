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
        
        flex: 8,
        width: '100%',
        
        borderRadius: 30,
    }
});