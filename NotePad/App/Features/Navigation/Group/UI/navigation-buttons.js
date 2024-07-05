import { NavigationPlate } from '../../../../Pull/Note';
import { GroupAddButton, SwitchToSettings, SwitchToNotes } from '../../../../Entities/Navigation'

export const NavigationGroupButtons = () => {


    return (
    <NavigationPlate>
        <SwitchToNotes />
        <GroupAddButton/>
        <SwitchToSettings />
    </NavigationPlate>
)};