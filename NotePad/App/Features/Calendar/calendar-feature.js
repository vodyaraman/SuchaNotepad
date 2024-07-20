import { StyleSheet, View} from 'react-native';
import { CurrentDateEntitie } from '../../Entities/Calendar/current-date-entity';
import { CalendarEntitie } from '../../Entities/Calendar/calendar-entity';
import { SelectedContext } from '../../Entities/Calendar/Hooks/context-of-selected';

import { convertToString } from '../../Entities/Calendar/Helpers/convertToString';
import { getCurrentDay } from '../../Entities/Calendar/Helpers/getCurrentDay';

import React, { useState} from 'react';
import { OuterPlate } from '../../Pull/Note';

const CalendarFeature = () => {
    
    const [selected, setSelected] = useState(convertToString(getCurrentDay()))
    const [isVisible, setIsVisible] = useState(false);

    function showCalendar(){
        setIsVisible(!isVisible)
    }
    
    return(
        <OuterPlate>
            <SelectedContext.Provider value={selected}>
                <CurrentDateEntitie showCalendar={showCalendar} />
                <CalendarEntitie setSelected={setSelected} isVisible={isVisible} /> 
            </SelectedContext.Provider>  
        </OuterPlate>        
    )
};

export default CalendarFeature;