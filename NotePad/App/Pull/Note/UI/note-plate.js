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
                {/* Aligning left and right slots at opposite ends */}
                <View style={styles.flexibleSlot}>{leftSlot}</View>
                <View style={styles.flexibleSlot}>{rightSlot}</View>

                {/* Bottom slot positioned absolutely within the middle gradient */}
                <View style={styles.bottomSlot}>
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
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    SideNotePlate: {
        width: '10%',
        height: '100%',
    },
    MiddleNotePlate: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        position: 'relative', // Allow absolute positioning within
        justifyContent: 'space-between', // Distribute left and right slots
    },
    flexibleSlot: {
        flex: 1,
        justifyContent: 'center', // Optional: to center vertically
    },
    bottomSlot: {
        position: 'absolute', // Absolute within middle gradient
        bottom: '40%',
        right: '10%', // Positioned to the bottom-right
    },
});

export default NotePlate;