import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from '../../../Pull/Note';
import { toggleComplete } from '../Helpers/list-logic';
import { useNote } from '../Hooks/note-api-hooks';

const NoteList = () => {
    const [note, updateNote] = useNote();
    const { noteText } = note;

    const handleToggleComplete = (index) => {
        const newItems = toggleComplete(noteText.text, index);
        updateNote({
            ...note,
            noteText: { ...note.noteText, text: newItems }
        });
    };

    console.log(`Rendering NoteList with items ${JSON.stringify(noteText.text)}`);

    return (
        <List
            items={noteText.text}
            onToggleComplete={handleToggleComplete}
            styles={styles}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 18,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default NoteList;
