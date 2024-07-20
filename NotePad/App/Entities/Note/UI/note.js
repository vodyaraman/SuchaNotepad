import React from "react";
import { ScrollView } from "react-native";
import { CustomText } from "../../../Pull/Note";

const Note = ({text}) => {
  console.log(`Note is rendered with text: ${text}`);

  return (
    <ScrollView>
      <CustomText
          text={text}
          fontSize={17}
          fontWeight="normal"
        />
    </ScrollView>
  );
};

export default Note;
