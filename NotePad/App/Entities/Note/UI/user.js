import React from "react";
import { CustomText } from "../../../Pull/Note";
import { useText } from '../../../Features/Note/index';

const NoteUser = ({ fontWeight = 'normal' }) => {
    const { userName } = useText();
    return (
        <CustomText textColor="#fc7303" text={userName} flex="start" fontWeight={fontWeight}/>
    );
};

export default NoteUser;
