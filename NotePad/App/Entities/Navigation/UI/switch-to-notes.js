import { useCallback } from "react";
import { SwipeButton } from "../../../Pull/Buttons";
import { Relocate, Show } from "../../../Processes/Navigation/Rules";
import NoteImage from "@../../../assets/Notes-icon.png";

export const SwitchToNotes = () => {
    const onPressHandler = useCallback(() => {
        Relocate.toMain();
        Show.Overlook();
    });
    return(
        <SwipeButton side={'left'} img={NoteImage} onPressHandler={onPressHandler}/>
    )
}