import React from 'react';
import { TaskButton } from "../../../Pull/Buttons";
import AddTask from '../../../../assets/plusTaskButton.png';

export const NoteAddButton = () => {
    const handleClick = () => {
        console.log();
    }

    return(
        <TaskButton handleClick={handleClick} img={AddTask} />
    );
}
