import { SwipeButton } from "../../../Pull/Buttons";
import GroupImage from "../../../../assets/swipeGroupButton.png";
import { useCallback } from "react";
import { Relocate, Show } from "../../../Processes/Navigation/Rules";

export const SwitchToGroups = () => {
    const onPressHandler = useCallback(() => {
        Relocate.toTest();
        Show.OverlookGroup();
    })
    return(
        <SwipeButton side={'left'} img={GroupImage} onPressHandler={onPressHandler}/>
    )
}