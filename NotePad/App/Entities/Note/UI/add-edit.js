import React, { useEffect, useState } from "react";
import { SmallUnderplate, getNoteType, TimeInput } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';
import { View, StyleSheet, Dimensions } from "react-native";
import { SubmitButton } from "../../../Pull/Buttons";

const NoteAddEdit = () => {
    const { timestamp, setTimestamp, noteType } = useText();
    const [shouldRender, setShouldRender] = useState(false);
    const [inputCount, setInputCount] = useState(0);

    useEffect(() => {
        const { timezone } = getNoteType(noteType);
        setShouldRender(timezone);
    }, [noteType]);

    const addInput = () => {
        if (inputCount < 2) setInputCount(inputCount + 1);
    };

    const delInput = () => {
        if (inputCount > 0) setInputCount(inputCount - 1);
    };

    const handleTimeChange = (key, time) => {
        setTimestamp(prev => ({ ...prev, [key]: time }));
    };


    return shouldRender ? (
        <View style={styles.container}>
            {inputCount > 0 && (
                <SmallUnderplate width="40%">
                    <TimeInput
                        time={timestamp.dateStart}
                        onChange={time => handleTimeChange('dateStart', time)}
                        placeholder="Start Time"
                    />
                </SmallUnderplate>
            )}
            {inputCount > 1 && (
                <SmallUnderplate width="40%">
                    <TimeInput
                        time={timestamp.dateEnd}
                        onChange={time => handleTimeChange('dateEnd', time)}
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
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
        backgroundColor: '#fcfcfcb0',
        flexDirection: 'row',
    },
    buttons: {
        flexDirection: 'row',
    }
});

export default NoteAddEdit;







