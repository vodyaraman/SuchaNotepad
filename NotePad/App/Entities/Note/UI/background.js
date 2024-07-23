import React, { useEffect, useState } from "react";
import { GradientBackground, getNoteType } from "../../../Pull/Note";
import { useNote } from '../Hooks/note-api-hooks';

const NoteBackground = () => {
    const [note] = useNote();
    const { noteType } = note;
    const [backgroundColor, setBackgroundColor] = useState("#FAFAFA");

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
    );
};

export default NoteBackground;
