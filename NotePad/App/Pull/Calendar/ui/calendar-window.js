import {StyleSheet, Pressable} from 'react-native';
import { CalendarUI } from './calendar-ui';

export function CalendarWindow({setSelected, isVisible}){
    return (       
        <Pressable style={[styles.calendarContainer, {display: isVisible ? 'block' : 'none'}]}>
            <CalendarUI setSelected={setSelected} />
        </Pressable>
    );
}

const styles = StyleSheet.create({

     calendarContainer:{
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 6,
        
        width: '100%',
    } 
})