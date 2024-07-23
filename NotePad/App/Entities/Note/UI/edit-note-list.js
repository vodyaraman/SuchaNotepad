import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNote } from '../Hooks/note-api-hooks';
import { SubmitButton } from '../../../Pull/Buttons';
import { InputText } from '../../../Pull/Note';

const EditNoteList = () => {
    const [note, updateNote] = useNote();
    const [items, setItems] = useState(note.noteText.text || []);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        if (note.noteText.text) {
            setItems(note.noteText.text);
        } else {
            console.warn('note.noteText.text is not defined. Received:', note);
            setItems([]);
        }
    }, [note]);

    const handleItemChange = useCallback((index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
        updateNote({
            ...note,
            noteText: { ...note.noteText, text: newItems }
        });
    }, [items, note, updateNote]);

    const handleAddItem = useCallback(() => {
        const newItems = [...items, ''];
        setItems(newItems);
        updateNote({
            ...note,
            noteText: { ...note.noteText, text: newItems }
        });

        setTimeout(() => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd({ animated: true });
            }
        }, 100);
    }, [items, note, updateNote]);

    const handleRemoveItem = useCallback((index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        updateNote({
            ...note,
            noteText: { ...note.noteText, text: newItems }
        });
    }, [items, note, updateNote]);

    const handleKeyDown = useCallback((index, event) => {
        if (event.nativeEvent.key === 'Backspace' && items[index] === '') {
            handleRemoveItem(index);
        } else if (index === items.length - 1 && event.nativeEvent.key === 'Enter') {
            handleAddItem();
        }
    }, [items, handleRemoveItem, handleAddItem]);

    return (
        <ScrollView ref={scrollViewRef} style={styles.List}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <View style={styles.OL} key={index}>
                        <Text style={styles.numeric}>{index + 1}</Text>
                        <InputText
                            fontSize={18}
                            value={item}
                            onChangeText={(text) => handleItemChange(index, text)}
                            onKeyPress={(e) => handleKeyDown(index, e)}
                            placeholder='Enter text'
                            style={styles.listInputs}
                        />
                    </View>
                ))
            ) : (
                <Text style={styles.emptyMessage}>No items to display</Text>
            )}
            <SubmitButton 
                text="Click here to add a new item"
                textColor="#000"
                onPressHandler={handleAddItem}
                color1="transparent"
                color2="transparent"
                style={styles.addButton}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        padding: 10,
    },
    emptyMessage: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    List: {
        width: '100%',
        paddingHorizontal: '5%',
    },
    OL: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    numeric: {
        flex: 1,
        fontWeight: 'bold',
    },
    listInputs: {
        flex: 12,
        width: '100%',
    },
});

export default EditNoteList;
