import React, {useEffect, useState, useMemo} from "react";
import { GradientBackground, getNoteType } from "../../../Pull/Note";
import { useText } from "../Helpers/note-manager";

const NoteBackground = () => {
    const { noteType } = useText();
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        const { backgroundColor } = getNoteType(noteType);
        setBackgroundColor(backgroundColor);
        console.log(`Цвет заметки изменен на: ${backgroundColor}`);
    }, [noteType]);

    const memoizedBackgroundColor = useMemo(() => backgroundColor, [backgroundColor]);
    return (
    <GradientBackground
      backgroundColor={memoizedBackgroundColor}
      height={'100%'}
      width={'100%'}
      borderRadius={15}
    />
    )
};

export default NoteBackground;