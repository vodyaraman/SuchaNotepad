import { NavigationPlate } from "../../../Pull/Note";
import { NoteAddButton, SwitchToGroups, SwitchToSettings } from '../../../Entities/Navigation'
import { NoteManagerProvider } from "../../../Entities/Note";

export const NavigationButtons = () => {
    return (
        <NoteManagerProvider>
            <NavigationPlate>
                <SwitchToGroups />
                <NoteAddButton/>
                <SwitchToSettings />
            </NavigationPlate>
        </NoteManagerProvider>
)};