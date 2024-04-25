import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NotePlate = ({ leftColor, rightColor, children, height }) => {
    return (
        <View style={[styles.NotePlate, {height: height}]}>
            <LinearGradient
                colors={[`${leftColor}1A`, `${leftColor}99`]} // От 10% до 60% непрозрачности
                style={styles.SideNotePlate}
                start={{ x: 0, y: 0 }} // Начало градиента слева
                end={{ x: 1, y: 0 }} // Градиент влево-вправо
            />
            <LinearGradient
                colors={[leftColor, rightColor]} // Градиент между двумя цветами
                style={styles.MiddleNotePlate}
                start={{ x: 0, y: 0 }} // Начало градиента слева
                end={{ x: 1, y: 0 }} // Градиент влево-вправо
            >
                {children}
            </LinearGradient>
            <LinearGradient
                colors={[`${rightColor}99`, `${rightColor}1A`]} // От 60% до 10% непрозрачности
                style={styles.SideNotePlate}
                start={{ x: 0, y: 0 }} // Начало градиента слева
                end={{ x: 1, y: 0 }} // Градиент влево-вправо
            />
        </View>
    );
};

const styles = StyleSheet.create({
    NotePlate: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: "center",
    },
    SideNotePlate: {
        width: '10%',
        height: "100%",
    },
    MiddleNotePlate: {
        width: '80%',
        height: "100%",
        opacity: 0.6,
    },
});

export default NotePlate;