import { StyleSheet, View} from 'react-native';
import { CurrentDateEntitie } from '../../Entities/Calendar/current-date-entity';
import { CalendarEntitie } from '../../Entities/Calendar/calendar-entity';
import { SelectedContext } from '../../Entities/Calendar/Hooks/context-of-selected';

import { convertToString } from '../../Entities/Calendar/Helpers/convertToString';
import { getCurrentDay } from '../../Entities/Calendar/Helpers/getCurrentDay';

import React, { useState} from 'react';

export function CalendarFeature(){
    
    const [selected, setSelected] = useState(convertToString(getCurrentDay()))
    const [isVisible, setIsVisible] = useState(false);

    function showCalendar(){
        setIsVisible(!isVisible)
    }
    
    return(
        <SelectedContext.Provider value={selected}>
            <View style={styles.mainContainer} >
                <CurrentDateEntitie showCalendar={showCalendar} />
                <View style={styles.calendarContainer}>
                    <CalendarEntitie setSelected={setSelected} isVisible={isVisible} /> 
                </View>
            </View>
        </SelectedContext.Provider>       
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',

        position: 'relative',
        zIndex: 2,
    },
    calendarContainer: {
        width: '100%',
        position: 'relative',
    }
})