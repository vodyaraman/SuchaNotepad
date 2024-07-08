import {NoteTitle, NoteManipulate, NoteUser} from "../../../Entities/Note";
import { NotePlate } from "../../../Pull/Note";
import React from "react";

const NoteOverlook = () => {

    return (
        <NotePlate 
            leftColor={"#9CFFF3"} 
            rightColor={"#A2EFE6"}
            leftSlot={<NoteUser />}
            rightSlot={<NoteTitle/>}
            bottomSlot={<NoteManipulate/>}/>
)};

export default NoteOverlook;