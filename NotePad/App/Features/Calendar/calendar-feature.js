import { SafeAreaView, StyleSheet, View} from 'react-native';
import { CurrentDateEntitie } from "./Entities/current-date-entity";
import { CalendarEntitie } from "./Entities/calendar-entity";
import { SelectedContext } from './Entities/Hooks/context-of-selected';

import { convertToString } from './Entities/Helpers/convertToString';
import { getCurrentDay } from './Entities/Helpers/getCurrentDay';

import React, { useState} from 'react';

export function CalendarFeature(){
    
    const [selected, setSelected] = useState(convertToString(getCurrentDay()))
    const [isVisible, setIsVisible] = useState(false);

    function showCalendar(){
        setIsVisible(!isVisible)
    }
    
    return(
        <SelectedContext.Provider value={selected}>
            <SafeAreaView style={styles.mainContainer} >
                <CurrentDateEntitie showCalendar={showCalendar} />
                <CalendarEntitie setSelected={setSelected} isVisible={isVisible} /> 
            </SafeAreaView>
        </SelectedContext.Provider>       
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    }
})