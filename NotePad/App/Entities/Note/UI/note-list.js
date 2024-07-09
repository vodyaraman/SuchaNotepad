import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from '../../../Pull/Note';
import { toggleComplete } from '../Helpers/list-logic';
import { useNoteText } from '../Hooks/note-api-hooks';

const NoteList = () => {
    const [noteText, updateNoteText] = useNoteText();

    const handleToggleComplete = (index) => {
        const newItems = toggleComplete(noteText.text, index);
        updateNoteText({ text: newItems });
    };

    console.log(`Rendering NoteList with items ${noteText}`)

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