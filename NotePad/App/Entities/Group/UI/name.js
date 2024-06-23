import React from "react";
import { CustomText } from "../../../Pull/Note";

const GroupName = ({ fontWeight = 'bold', groupName = 'Pandas' }) => {
    return (
        <CustomText 
            textColor="#fc7303" 
            text={groupName} flex="start" 
            fontWeight={fontWeight}
            fontSize={20}
        />
    );
};

export default GroupName;