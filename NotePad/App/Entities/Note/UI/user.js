import React from "react";
import { CustomText } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const NoteUser = ({ fontWeight = 'bold' }) => {
    const { userName } = useText();
    return (
        <CustomText 
            textColor="#fc7303" 
            text={userName} flex="start" 
            fontWeight={fontWeight}
            fontSize={20}
        />
    );
};

export default NoteUser;
