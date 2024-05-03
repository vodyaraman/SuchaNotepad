import { Calendar } from "react-native-calendars";
import React, { useContext } from 'react';
import { SelectedContext } from "../Entities/Hooks/context-of-selected";

export function CalendarUI({setSelected}){
    let selected = useContext(SelectedContext)

    function daySelect(day){
        setSelected(day.dateString);
        console.log('onDayPress', day);
    }

    return (
        <Calendar
        
        onDayPress={daySelect}
        style={{
            padding: 20,
            borderRadius: 15,
        }}
        markedDates={ //Настройка отображения выбранного дня
            {
                [selected]: {selected: true, selectedColor: '#E9D78C'},
            }
        }  
        />
    );
}

/* 
---  ПОЛЕЗНЫЕ НАСТРОЙКИ КАЛЕНДАРЯ ---
    <CalendarList
        pastScrollRange={24} //Количество доступных для отображения предыдущих месяцев
        futureScrollRange={24} //Количество доступных для отображения будущих месяцев
        firstDay={1}    
    />
*/
 
