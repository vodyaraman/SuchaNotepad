import React from "react";
import { CustomText } from "../../../Pull/Note";

const NoteTitle = ({ title }) => {
    return (
        <CustomText 
            textColor="#000" 
            text={title} 
            flex="start" 
            fontWeight="bold"
            fontSize={20}
        />
    );
};

export default NoteTitle;

