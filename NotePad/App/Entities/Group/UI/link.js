import React from "react";
import { CustomText } from "../../../Pull/Note";

const GroupLink = ({ fontWeight = 'bold', groupLink = '@fkwpp1214dsdsw2' }) => {
    return (
        <CustomText 
            textColor="#fc7303" 
            text={groupLink} flex="start" 
            fontWeight={fontWeight}
            fontSize={20}
        />
    );
};

export default GroupLink;