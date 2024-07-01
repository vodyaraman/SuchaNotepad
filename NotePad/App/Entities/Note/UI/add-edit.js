import React, { useEffect, useState } from "react";
import { InputText, SmallUnderplate, getNoteType } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';
import { View, StyleSheet } from "react-native";

const NoteAddEdit = () => {
    const { timestamp, setTimestamp, noteType } = useText();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const { timezone } = getNoteType(noteType);
        setShouldRender(timezone);
        console.log(timezone);
    }, [noteType]);

    return shouldRender ? (
        <View style={styles.container}>
            <SmallUnderplate>
                <InputText
                    textColor="#0d0c0c"
                    text={timestamp}
                    onChangeText={setTimestamp}
                    textAlign={"center"}
                    fontWeight={"normal"}
                    placeholder=""
                    multiline={false}
                />
            </SmallUnderplate>
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#fcfcfcb0',
    },
});

export default NoteAddEdit;


