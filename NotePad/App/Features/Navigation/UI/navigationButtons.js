import { NavigationPlate } from '../../../Pull/Note';
import { GroupAddButton, NoteAddButton, SwitchToSettings, SwitchToNotes, SwitchToGroups } from '../../../Entities/Navigation';

export const NavigationButtons = ({screen = 'note', setStatus, status}) => {
    return (
    <NavigationPlate>
        {screen === 'note' ? <SwitchToGroups /> : <SwitchToNotes />}
        {screen === 'note' ? <NoteAddButton /> : <GroupAddButton setStatus={setStatus} status={status} />}
        <SwitchToSettings />
    </NavigationPlate>
)};

