import React, { useState } from 'react';
import { GroupNavigation } from '../../Processes/Navigation';
import { MainWidgetPlate } from '../../Pull/Note';
import { NavigationButtons } from '../../Features/Navigation';
import { GroupManagerProvider } from '../../Entities/Group';

const Group = () => {
    const [status, setStatus] = useState(false)

    return (
        <GroupManagerProvider>
            <MainWidgetPlate>
                <GroupNavigation  />
                <NavigationButtons screen="group" status={status} setStatus={setStatus} />
            </MainWidgetPlate>
        </GroupManagerProvider> 
    );
};

export default Group;