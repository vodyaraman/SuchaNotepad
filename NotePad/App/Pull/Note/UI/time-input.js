import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TimeInput = ({ time, onChange, placeholder }) => {
    const handleTimeChange = (text) => {
        const [hours, minutes] = text.split(':').map(Number);
        if (!isNaN(hours) && !isNaN(minutes)) {
            const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            onChange(timeString);
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={time || ''}
                onChangeText={handleTimeChange}
                placeholder={placeholder}
                keyboardType="numeric"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingHorizontal: 10,
    },
});

export default TimeInput;
