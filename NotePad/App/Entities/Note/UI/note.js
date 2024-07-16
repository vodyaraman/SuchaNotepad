import React from "react";
import { ScrollView } from "react-native";
import { CustomText } from "../../../Pull/Note";

const Note = ({noteText}) => {

  console.log(`Note is rendered with text: ${noteText}`);

  return (
    <ScrollView>
      <CustomText
          text={noteText.text}
          flex="center"
        />
    </ScrollView>
  );
};

export default Note;
