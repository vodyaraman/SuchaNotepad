import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { CustomText } from "../../Note";
import { EntityColors } from '../../Consts/Colors/dark-theme';

const MainCalendarButton = React.memo(({ showCalendar, dayName }) => {
    console.log(EntityColors.TextColor); // Проверка цвета в консоли

    return (
        <Pressable
            onPress={showCalendar}
            style={({ pressed }) => [
                styles.calendarButton,
                { 
                    opacity: pressed ? 0.3 : 1, 
                    backgroundColor: EntityColors.ButtonCalendarColor
                }
            ]}
        >
            <CustomText
                text={dayName}
                fontWeight='bold'
                fontSize={18}
                textColor={EntityColors.TextColor}
            />
        </Pressable>
    );
});

export default MainCalendarButton;

const styles = StyleSheet.create({
    calendarButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        padding: 5,
        borderRadius: 15,
    },
});



