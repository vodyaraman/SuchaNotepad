import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useText } from '../Helpers/note-manager';
import { SubmitButton } from '../../../Pull/Buttons';
import { InputText } from '../../../Pull/Note';

const EditNoteList = () => {
    const { noteText, setNoteText } = useText();
    const [items, setItems] = useState(noteText.text || []);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        if (noteText.text) {
            setItems(noteText.text);
        } else {
            console.warn('noteText.text is not defined. Received:', noteText);
            setItems([]);
        }
    }, [noteText]);

    const handleItemChange = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
        setNoteText({ text: newItems });
    };

    const handleAddItem = () => {
        const newItems = [...items, ''];
        setItems(newItems);
        setNoteText({ text: newItems });

        setTimeout(() => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollToEnd({ animated: true });
            }
        }, 100);
    };

    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        setNoteText({ text: newItems });
    };

    const handleKeyDown = (index, event) => {
        if (event.nativeEvent.key === 'Backspace' && items[index] === '') {
            handleRemoveItem(index);
        } else if (index === items.length - 1 && event.nativeEvent.key === 'Enter') {
            handleAddItem();
        }
    };

    return (
        <ScrollView ref={scrollViewRef} style={styles.OL}>
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
    OL: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: '5%'
    },
    numeric: {
        flex: 1,
        fontWeight: 'bold'
    },
    listInputs: {
        flex: 12
    },
});

export default EditNoteList;






