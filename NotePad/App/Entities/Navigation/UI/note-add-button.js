import React from 'react';
import { useAddNote } from '../../Note/Hooks/add-note';
import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';

export const NoteAddButton = () => {
    const { handleNoteCreate } = useAddNote();
    return (
        <>
            <TaskButton handleClick={handleNoteCreate} img={AddTask} />
        </>
    );
};