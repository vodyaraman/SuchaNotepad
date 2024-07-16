import React from "react";
import { CustomText } from "../../../Pull/Note";

const NoteUser = ({userName}) => {
    return (
        <CustomText 
            textColor="#fc7303" 
            text={userName} 
            flex="start" 
            fontWeight="bold"
            fontSize={20}
        />
    );
};

export default NoteUser;


