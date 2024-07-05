import React, {useEffect, useState} from "react";
import { GradientBackground, getNoteType } from "../../../Pull/Note";
import { useType } from "../Helpers/type-manager";

const NoteBackground = () => {
    const { noteType } = useType();
    const [backgroundColor, setBackgroundColor] = useState("#fff");

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