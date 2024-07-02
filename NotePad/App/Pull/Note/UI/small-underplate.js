import React from "react";
import { StyleSheet, View } from "react-native";

const SmallUnderplate = ({ 
    children, 
    width = '32px', 
    height = '32px', 
    marginLeft = 5,
    justifyContent = 'center',
}) => {
    return (
        <View style={[styles.Underplate, { width, height, marginLeft, justifyContent}]}>
            {children}
        </View>
    );
};

export default SmallUnderplate;

const styles = StyleSheet.create({
    Underplate: {
        borderRadius: 25,
        backgroundColor: "#F8F8F8",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 10,
    },
});
