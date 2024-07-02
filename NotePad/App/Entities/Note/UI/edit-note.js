import React from "react";
import { InputText } from "../../../Pull/Note";
import { useText } from '../Helpers/note-manager';

const EditNote = () => {
    const { noteText, setNoteText } = useText();
    return (
        <InputText
          borderBottomColor="transparent"
          textColor={'#000'}
          text={noteText}
          onChangeText={setNoteText}
          multiline={true}
          height={"100%"}
          fontSize={18}
        />
    );
};

export default EditNote;
