import { MainCalendarButton } from '../../Pull/Calendar/index';
import { useContext } from 'react';
import { SelectedContext } from './Hooks/context-of-selected';

import { convertToButtonString } from './Helpers/convertToButtonString';
import { convertToDate } from './Helpers/convertToDate';


export function CurrentDateEntitie({showCalendar}){
    let tempDate = convertToDate(useContext(SelectedContext))
    
    return(
        <MainCalendarButton showCalendar={showCalendar} dayName={convertToButtonString(tempDate)} />
    )
}