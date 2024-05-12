import React from "react";
import { ScrollView } from "react-native";
import { InputText } from "../../../Pull/Note";

const EditNote = ({ 
  textColor = '#000', 
  text = 'Текст по умолчанию достаточно большой, возомжно, он занимает больше одной строки и ему требуется какое-то дополнительное форматирование по типу выравнивания по ширине' 
}) => {
    return (
        <InputText
          textColor={textColor}
          text={text}
          numberOfLines={null}
          multiline={true}
          height={"100%"}
          fontSize={13}
        />

    );
};

export default EditNote;