import { RotateAnim } from "../../Pull/Calendar/index";
import { CalendarWindow } from "../../Pull/Calendar/index";
import { StyleSheet } from "react-native";

export function CalendarEntitie({setSelected, isVisible}){

    return(
        <RotateAnim  isVisible={isVisible}>
            <CalendarWindow setSelected={setSelected} isVisible={isVisible} />
        </RotateAnim> 
    );
}
const styles = StyleSheet.create({
    
})
