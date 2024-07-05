import { SwipeButton } from "../../../Pull/Buttons";
import NoteImage from "@../../../assets/Notes-icon.png";

export const SwitchToNotes = () => {
    return(
        <SwipeButton side={'left'} img={NoteImage} />
    )
}