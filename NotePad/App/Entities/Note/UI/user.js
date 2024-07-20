import React from "react";
import { CustomText } from "../../../Pull/Note";

const NoteUser = ({userName, fontWeight = "light", fontSize = 18}) => {
    return (
        <CustomText
            text={userName} 
            flex="start" 
            fontWeight={fontWeight}
            fontSize={fontSize}
        />
    );
};

export default NoteUser;


