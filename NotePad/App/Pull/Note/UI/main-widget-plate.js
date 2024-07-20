import React from "react";
import { StyleSheet, View } from "react-native";
import { WidgetColors } from "../../Consts/Colors/dark-theme";

const MainWidgetPlate = ({children, style}) => {
    return (
    <View style = { [styles.MainWidgetPlateStyle, style]}>
        {children}
    </View>
)};

export default MainWidgetPlate;

const styles = StyleSheet.create({
    MainWidgetPlateStyle: {
        position: 'relative',
        flex: 8,
        width: '100%',
        borderRadius: 25,
        backgroundColor: WidgetColors.MainWidgetColor,

        marginTop: 15,
        marginBottom: 15,
    }
});
