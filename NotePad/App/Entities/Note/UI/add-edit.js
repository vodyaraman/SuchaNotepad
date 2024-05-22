import React from "react";
import { InputText, SmallUnderplate } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const NoteAddEdit = ({ flex = 'center', fontWeight = "normal", fontSize = 14 }) => {
    const { timestamp, setTimestamp } = useText();

    const handleDateChange = (newDateString) => {
        const dates = newDateString.split(',').map(date => date.trim());
        const newTimestamp = { ...timestamp };

        if (dates.length === 2) {
            newTimestamp.dateStart = dates[0];
            newTimestamp.dateEnd = dates[1] || "";
        } else if (dates.length === 1) {
            newTimestamp.dateStart = dates[0];
            newTimestamp.dateEnd = "";
        }

        setTimestamp(newTimestamp);
    };

    const formatDateString = () => {
        if (timestamp.dateEnd) {
            return `${timestamp.dateStart}, ${timestamp.dateEnd}`;
        }
        return timestamp.dateStart;
    };

    return (
        <SmallUnderplate>
            <InputText
                textColor="#0d0c0c"
                text={formatDateString()}
                onChangeText={handleDateChange}
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

