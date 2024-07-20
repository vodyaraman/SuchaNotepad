import React from "react";
import { CustomText } from "../../../Pull/Note";

const NoteTitle = ({ title }) => {
    return (
        <CustomText 
            text={title} 
            flex="start" 
            fontWeight="bold"
            fontSize={18}
        />
    );
};

export default NoteTitle;

