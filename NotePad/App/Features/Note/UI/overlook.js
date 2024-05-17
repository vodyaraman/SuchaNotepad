import {NoteTitle, NoteManipulate, NoteUser} from "../../../Entities/Note";
import { NotePlate } from "../../../Pull/Note";
import React, { useState } from "react";

const NoteOverlook = () => {
    const [leftColor, setLeftColor] = useState("#9CFFF3")
    const [rightColor ,setRightColor] = useState("#A2EFE6")
    return (
        <NotePlate 
            leftColor={leftColor} 
            rightColor={rightColor} 
            height={60} 
            leftSlot={<NoteUser />}
            rightSlot={<NoteTitle/>}
            bottomSlot={<NoteManipulate/>}/>
)};

export default NoteOverlook;