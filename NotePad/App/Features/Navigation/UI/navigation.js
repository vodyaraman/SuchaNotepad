import { NavigationPlate } from "../../../Pull/Note";
import { NoteAddButton, SwitchToGroups, SwitchToSettings } from '../../../Entities/Navigation'

export const NavigationButtons = () => {
    return (
    <NavigationPlate>
        <SwitchToGroups />
        <NoteAddButton/>
        <SwitchToSettings />
    </NavigationPlate>
)};