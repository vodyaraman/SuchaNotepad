import { NavigationPlate } from "../../../../Pull/Note";
import { NoteAddButton, SwitchToSettings, SwitchToGroups } from '../../../../Entities/Navigation'

export const NavigationNoteButtons = () => {
    return (
    <NavigationPlate>
        <SwitchToGroups />
        <NoteAddButton />
        <SwitchToSettings />
    </NavigationPlate>
)};