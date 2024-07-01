import React, {useEffect, useState} from "react";
import { GradientBackground, getNoteType } from "../../../Pull/Note";
import { useText } from "../Helpers/note-manager";

const NoteBackground = () => {
    const { noteType } = useText();
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        const { backgroundColor } = getNoteType(noteType);
        setBackgroundColor(backgroundColor);
    }, [noteType]);

    return (
    <GradientBackground
      backgroundColor={backgroundColor}
      height={'100%'}
      width={'100%'}
      borderRadius={15}
    />
    )
};

export default NoteBackground;