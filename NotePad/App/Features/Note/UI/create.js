import React, { useState, useEffect} from "react";
import { EditNote, EditNoteTitle, NoteAddEdit, NoteChangeType } from "../../../Entities/Note";
import { FullScaledNotePlate, getNoteType } from "../../../Pull/Note";
import { useText } from "../../../Entities/Note/Helpers/note-manager";

const NoteWrite = () => {
    const { noteType } = useText();
    const [colors, setColors] = useState(getNoteType(noteType));

    useEffect(() => {
        // Обновляем цвета при изменении noteType
        setColors(getNoteType(noteType));
        console.log(`Цвет заметки изменен на: ${colors.backgroundColor}`);
    }, [noteType]);
    
    return (
        <FullScaledNotePlate
            backgroundColor={colors.backgroundColor}
            height="100%"
            Title={() => (
                <>
                    <EditNoteTitle/>
                </>    
            )}
            Note={() => (
                <>
                    <EditNote/>
                </>
            )}
            Extra={() => (
                <>
                    <NoteAddEdit/>
                    <NoteChangeType/>
                </>
            )}
        />
    );
};

export default NoteWrite;

