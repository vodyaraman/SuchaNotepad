import React from 'react';
import { Text } from 'react-native';
import { useAddNote } from '../../Note/Hooks/add-note';
import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';

export const NoteAddButton = () => {
    const { handleNoteCreate, isLoading, isSuccess, isError, error } = useAddNote();

    return (
        <>
            <TaskButton handleClick={handleNoteCreate} img={AddTask} />
            {isLoading && <Text>Saving...</Text>}
            {isSuccess && <Text>Note created successfully!</Text>}
            {isError && <Text>Error: {error.message || JSON.stringify(error)}</Text>}
        </>
    );
};