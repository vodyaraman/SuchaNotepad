import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NotePlate = ({ leftColor, rightColor, leftSlot, rightSlot, bottomSlot, height }) => {
    return (
        <View style={[styles.NotePlate, { height: height }]}>
            <LinearGradient
                colors={[`${leftColor}1A`, `${leftColor}99`]} // Gradient for left edge
                style={styles.SideNotePlate}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}
            />

            <LinearGradient
                colors={[`${leftColor}99`, `${rightColor}99`]} // Main middle gradient
                style={styles.MiddleNotePlate}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.TextSlotLeft}>
                    {leftSlot}
                </View>
                <View style={styles.TextSlotRight}>
                    {rightSlot}
                </View>
                <View style={styles.BottomSlot}>
                    {bottomSlot}
                </View>
            </LinearGradient>

            <LinearGradient
                colors={[`${rightColor}99`, `${rightColor}1A`]} // Gradient for right edge
                style={styles.SideNotePlate}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    NotePlate: {
        position: 'relative',
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        cursor: "pointer",
    },
    SideNotePlate: {
        width: '10%',
        height: '100%',
    },
    MiddleNotePlate: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
    },
    TextSlotLeft: {
        flex: 1,
        alignItems: "flex-start",
    },
    TextSlotRight: {
        flex: 1,
        opacity: 0.79,
        alignItems: "flex-end",
    },
    BottomSlot: {
        position: 'absolute',
        bottom: '-40%',
        right: '10%',
    },
});

export default NotePlate;