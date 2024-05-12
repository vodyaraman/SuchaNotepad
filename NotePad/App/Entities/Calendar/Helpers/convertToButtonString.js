import { addZero } from './addZero';

const daysOfWeek = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

export function convertToButtonString(date){

    let currentDay = date.getDate()
    let currentMonth = date.getMonth();
    
    let dateString = `${addZero(currentDay)} ${daysOfWeek[currentMonth]}`;
    return dateString;
}