import React from "react";
import { CustomText } from "../../../Pull/Note";
import { useUserName } from '../Hooks/note-api-hooks';

const NoteUser = ({ fontWeight = 'bold' }) => {
    const [userName] = useUserName();
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

