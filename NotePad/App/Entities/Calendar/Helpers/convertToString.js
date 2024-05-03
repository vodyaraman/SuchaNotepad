import { addZero } from "./addZero";

export function convertToString(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();


    let string = `${year}-${addZero(month)}-${addZero(day)}`
    return string
}