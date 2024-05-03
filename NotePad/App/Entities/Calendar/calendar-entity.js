import { RotateAnim } from "../Pull/rotate-anim";
import { CalendarWindow } from "../calendar-window";

export function CalendarEntitie({setSelected, isVisible}){

    return(
        <RotateAnim isVisible={isVisible}>
            <CalendarWindow setSelected={setSelected} isVisible={isVisible} />
        </RotateAnim> 
    );
}