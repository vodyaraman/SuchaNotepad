import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useText } from '../Helpers/note-manager';
import { SubmitButton } from '../../../Pull/Buttons';
import { InputText } from '../../../Pull/Note';

const EditNoteList = () => {
    const { noteText, setNoteText } = useText();
    const [items, setItems] = useState(Array.isArray(noteText) ? noteText : []);

    useEffect(() => {
        console.log('Received noteText:', noteText);
        if (Array.isArray(noteText)) {
            setItems(noteText);
        } else {
            console.warn('noteText is not an array. Received:', noteText);
            setItems([]);
        }
    }, [noteText]);

    const handleItemChange = (index, value) => {
        const newItems = [...items];
        newItems[index].text = value;
        setItems(newItems);
        setNoteText(newItems);
    };

    const handleAddItem = () => {
        const newItems = [...items, { text: '', completed: false }];
        setItems(newItems);
        setNoteText(newItems);
    };

    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        setNoteText(newItems);
    };

    const handleKeyDown = (index, event) => {
        if (event.nativeEvent.key === 'Backspace' && items[index].text === '') {
            handleRemoveItem(index);
        } else if (index === items.length - 1 && event.nativeEvent.key === 'Enter') {
            handleAddItem();
        }
    };

    return (
        <View>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <InputText
                        key={index}
                        value={item.text}
                        onChangeText={(text) => handleItemChange(index, text)}
                        onKeyPress={(e) => handleKeyDown(index, e)}
                        style={styles.input}
                    />
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
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
    },
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
});

export default EditNoteList;




