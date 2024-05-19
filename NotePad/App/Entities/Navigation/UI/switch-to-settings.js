import { SwipeButton } from "../../../Pull/Buttons";
import SettingsImage from "../../../../assets/swipeSettingsButton.png";

export const SwitchToSettings = () => {
    return(
        <SwipeButton side={'right'} img={SettingsImage} />
    )
}