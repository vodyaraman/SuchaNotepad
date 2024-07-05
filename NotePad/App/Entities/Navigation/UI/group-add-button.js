import React from 'react';

import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';

import { Show } from '../../../Processes/Navigation/Rules';

export const GroupAddButton = () => {

    const handleGroupCreate = () => {
        Show.Create()
    }

    return (
        <>
            <TaskButton handleClick={handleGroupCreate} img={AddTask} />
        </>
    );
};
