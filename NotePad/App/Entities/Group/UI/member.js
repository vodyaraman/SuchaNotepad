import React from "react";
import { CustomText } from "../../../Pull/Note";

const GroupMember = ({ fontWeight = 'bold', userName = 'Somebody' }) => {
    return (
        <CustomText 
            textColor="#fc7303" 
            text={userName} flex="start" 
            fontWeight={fontWeight}
            fontSize={20}
        />
    );
};

export default GroupMember;