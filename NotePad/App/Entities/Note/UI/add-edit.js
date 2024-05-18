import React from "react";
import { InputText, SmallUnderplate } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const NoteAddEdit = ({ flex = 'center', fontWeight = "normal", fontSize = 14 }) => {
    const { timestamp, setTimestamp } = useText();

    const handleDateChange = (newDateString) => {
        const dates = newDateString.split(',').map(date => date.trim());
        const newTimestamp = { ...timestamp };

        if (dates.length === 2) {
            newTimestamp.dateStart = new Date(dates[0]);
            newTimestamp.dateEnd = dates[1] ? new Date(dates[1]) : null;
        } else if (dates.length === 1) {
            newTimestamp.dateStart = new Date(dates[0]);
            newTimestamp.dateEnd = null;
        }

        setTimestamp(newTimestamp);
    };

    const formatDateString = () => {
        if (timestamp.dateEnd) {
            return `${timestamp.dateStart.toLocaleDateString()}, ${timestamp.dateEnd.toLocaleDateString()}`;
        }
        return timestamp.dateStart.toLocaleDateString();
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
