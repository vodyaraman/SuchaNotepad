import React from "react";
import { ScrollView } from "react-native";
import { CustomText } from "../../../Pull/Note";
import { useText } from "../Helpers/note-manager";

const Note = () => {
  const {noteText} = useText();

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

