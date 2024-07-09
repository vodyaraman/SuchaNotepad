import React from "react";
import { ScrollView } from "react-native";
import { CustomText } from "../../../Pull/Note";
import { useNoteText } from '../Hooks/note-api-hooks';

const Note = () => {
  const [noteText] = useNoteText();

    return (
      <ScrollView>
        <CustomText
          textColor={textColor}
          text={noteText.text[0]}
          flex="center"
          numberOfLines={null}
        />
      </ScrollView>
    );
};

export default Note;