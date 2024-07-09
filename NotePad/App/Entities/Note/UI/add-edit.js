import React, { useEffect, useState } from "react";
import { SmallUnderplate, getNoteType, TimeInput } from "../../../Pull/Note";
import { useTimestamp, useNoteType } from '../Hooks/note-api-hooks';
import { View, StyleSheet } from "react-native";
import { SubmitButton } from "../../../Pull/Buttons";
import DateTimePicker from '@react-native-community/datetimepicker';

const NoteAddEdit = () => {
    const [timestamp, updateTimestamp] = useTimestamp();
    const [noteType] = useNoteType();
    const [shouldRender, setShouldRender] = useState(false);
    const [inputCount, setInputCount] = useState(0);
    const [showPicker, setShowPicker] = useState(false);
    const [pickerTarget, setPickerTarget] = useState(null);

    useEffect(() => {
        const { timezone } = getNoteType(noteType);
        setShouldRender(timezone);
    }, [noteType]);

    const addInput = () => {
        if (inputCount < 2) {
            setPickerTarget(inputCount === 0 ? 'dateStart' : 'dateEnd');
            setShowPicker(true);
        }
    };

    const delInput = () => {
        if (inputCount > 0) {
            updateTimestamp(prev => ({
                ...prev,
                dateEnd: inputCount === 2 ? '' : prev.dateEnd,
                dateStart: inputCount === 1 ? '' : prev.dateStart
            }));
            setInputCount(inputCount - 1);
        }
    };

    const handleTimeChange = (event, selectedTime) => {
        const newTime = selectedTime || new Date();
        const hours = newTime.getHours();
        const minutes = newTime.getMinutes();
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

        updateTimestamp(prev => ({ ...prev, [pickerTarget]: timeString }));
        setShowPicker(false);

        if (pickerTarget === 'dateStart') {
            setInputCount(1);
        } else if (pickerTarget === 'dateEnd') {
            setInputCount(2);
        }
    };

    return shouldRender ? (
        <View style={styles.container}>
            {inputCount > 0 && (
                <SmallUnderplate width="30%">
                    <TimeInput
                        time={timestamp.dateStart}
                        onChange={time => updateTimestamp(prev => ({ ...prev, dateStart: time }))}
                        placeholder="Start Time"
                    />
                </SmallUnderplate>
            )}
            {inputCount > 1 && (
                <SmallUnderplate width="30%">
                    <TimeInput
                        time={timestamp.dateEnd}
                        onChange={time => updateTimestamp(prev => ({ ...prev, dateEnd: time }))}
                        placeholder="End Time"
                    />
                </SmallUnderplate>
            )}
            <View style={styles.buttons}>
                {inputCount < 2 && (
                    <SmallUnderplate>
                        <SubmitButton 
                            text="+"
                            onPressHandler={addInput} 
                            textColor="#000"
                            fontSize={20}
                            fontWeight="bold"
                            color1='transparent'
                            color2='transparent'
                        />
                    </SmallUnderplate>
                )}
                {inputCount > 0 && (
                    <SmallUnderplate marginLeft={5}>
                        <SubmitButton 
                            text="-"
                            onPressHandler={delInput} 
                            textColor="#000"
                            fontSize={20}
                            fontWeight="bold"
                            color1='transparent'
                            color2='transparent'
                        />
                    </SmallUnderplate>
                )}
            </View>
            {showPicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                />
            )}
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 5,
        flexDirection: 'row',
    },
    buttons: {
        flexDirection: 'row',
    }
});

export default NoteAddEdit;