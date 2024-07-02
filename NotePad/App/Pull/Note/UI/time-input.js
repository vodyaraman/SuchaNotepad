import React, { useState } from 'react';
import { Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimeInput = ({
    time,
    onChange,
    placeholder,
    height = 40,
    width = 100,
    fontFamily = 'Montserrata-medium',
    textAlign = 'center',
    lineHeight = 40,
    fontSize = 16,
    backgroundColor = 'transparent',
    textColor = 'black',
    textStyle = {},
    onPress
}) => {
    const [currentTime, setCurrentTime] = useState(time ? new Date(`1970-01-01T${time}:00`) : new Date());
    const [show, setShow] = useState(false);

    const handleTimeChange = (event, selectedTime) => {
        const newTime = selectedTime || currentTime;
        setShow(Platform.OS === 'web');
        setCurrentTime(newTime);

        const hours = newTime.getHours();
        const minutes = newTime.getMinutes();
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        onChange(timeString);
    };

    const showTimePicker = () => {
        setShow(true);
        if (onPress) {
            onPress();
        }
    };

    return (
        <>
            <Text
                style={[{ height, width, backgroundColor, fontFamily, fontSize, color: textColor, textAlign, lineHeight }, textStyle]}
                onPress={showTimePicker}
            >
                {time ? (
                    `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}`
                ) : (
                    placeholder
                )}
            </Text>
            {show && (
                <DateTimePicker
                    value={currentTime}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                />
            )}
        </>
    );
};

export default TimeInput;


