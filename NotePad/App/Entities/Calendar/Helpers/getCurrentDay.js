import { convertToString } from "./convertToString";

export function getCurrentDay(){
    let tempDate = new Date()
    let y = tempDate.getFullYear();
    let m = tempDate.getMonth() + 1;
    let d = tempDate.getDate()

    let currentDate = new Date(y,m,d)
    
    return currentDate;
}
