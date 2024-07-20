import { NavigationPlate, OuterPlate } from '../../../Pull/Note';
import { GroupAddButton, NoteAddButton, SwitchToSettings, SwitchToNotes, SwitchToGroups } from '../../../Entities/Navigation';

export const NavigationButtons = ({screen = 'note', setStatus, status}) => {
    return (
    <OuterPlate>
        {screen === 'note' ? <SwitchToGroups /> : <SwitchToNotes />}
        {screen === 'note' ? <NoteAddButton /> : <GroupAddButton setStatus={setStatus} status={status} />}
        <SwitchToSettings />
    </OuterPlate>
)};

