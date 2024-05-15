import React from "react";
import { InputText, SmallUnderplate } from "../../../Pull/Note";
import { useText } from '../../../Features/Note/index';

const NoteAddEdit = ({ flex = 'center', fontWeight = "normal", fontSize = 14 }) => {
    const { noteAdd, setNoteAdd } = useText();
    return (
        <SmallUnderplate>
            <InputText
            textColor="#0d0c0c"
            text={noteAdd.timecode}
            onChangeText={(newTimecode) => setNoteAdd({ ...noteAdd, timecode: newTimecode })}
            textAlign={flex}
            fontWeight={fontWeight}
            fontSize={fontSize}
            placeholder=""
            multiline={false}
        />
        </SmallUnderplate> 
    );
};

export default NoteAddEdit;