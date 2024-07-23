import React from 'react';
import { useNavigationState } from '@react-navigation/native';
import { useAddNote } from '../../Note/Hooks/add-note';
import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';
import { Show } from '../../../Processes/Navigation/Rules';

export const NoteAddButton = () => {
    const { handleNoteCreate } = useAddNote();
    const currentRoute = useNavigationState(state => state.routes[state.index].name);

    const handleClick = () => {
        if (currentRoute === 'Write') {
            handleNoteCreate();
        } else {
            Show.Write();
        }
    };

    return (
        <>
            <TaskButton handleClick={handleClick} img={AddTask} />
        </>
    );
};
