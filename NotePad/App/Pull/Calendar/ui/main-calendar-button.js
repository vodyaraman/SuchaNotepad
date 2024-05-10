import { Pressable, Text, StyleSheet } from "react-native";

export function MainCalendarButton({showCalendar, dayName}){

    return(
        <Pressable
        onPress={showCalendar} 
        style={({pressed}) => [styles.calendarButton,  {opacity: pressed ? 1 : 1}]}>
            <Text style={styles.text}>{dayName}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    calendarButton: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 245,
        maxWidth: '100%',
        backgroundColor: '#F8F8F8',
        padding: 5,

        borderRadius: 35,

        shadowColor: 'black',
        elevation: 6,
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
})