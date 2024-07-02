import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from '../../../Pull/Note';
import { toggleComplete } from '../Helpers/list-logic';
import { useText } from '../Helpers/note-manager';

const NoteList = () => {
    const { noteText, setNoteText } = useText();

    const handleToggleComplete = (index) => {
        const newItems = toggleComplete(noteText, index);
        setNoteText(newItems);
    };

    console.log(`Rendering NoteList with items ${noteText}`)

    return (
        <List
            items={noteText}
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

