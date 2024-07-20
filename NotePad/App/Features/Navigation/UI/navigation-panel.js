import React from 'react';
import { NavigationPlate, OuterPlate } from '../../../Pull/Note';
import { GroupAddButton, NoteAddButton, SwitchToSettings, SwitchToNotes, SwitchToGroups, BackButton } from '../../../Entities/Navigation';
import { notepadNavRef } from '../../../Processes/Navigation/Rules/show-feature';

export const NavigationButtons = ({ screen = 'note' }) => {
  return (
    <OuterPlate>
      <NavigationPlate
        BackButton={() => <BackButton navigationRef={notepadNavRef} />}
        GroupButton={screen === 'note' ? SwitchToGroups : SwitchToNotes}
        SettingsButton={SwitchToSettings}
        AddButton={screen === 'note' ? NoteAddButton : GroupAddButton}
      />
    </OuterPlate>
  );
};


