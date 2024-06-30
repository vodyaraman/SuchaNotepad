import React from "react";
import { InputText, SmallUnderplate } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const NoteAddEdit = ({ flex = 'center', fontWeight = "normal", fontSize = 13 }) => {
    const { timestamp, setTimestamp } = useText();

    return (
        <SmallUnderplate>
            <InputText
                textColor="#0d0c0c"
                text={timestamp}
                onChangeText={() => {setTimestamp}}
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

