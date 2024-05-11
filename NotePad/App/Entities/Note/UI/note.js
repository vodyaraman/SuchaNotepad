import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { CustomText } from "../../../Pull/Note";

const Note = ({ 
  textColor = '#000', 
  text = 'Текст по умолчанию достаточно большой, возомжно, он занимает больше одной строки и ему требуется какое-то дополнительное форматирование по типу выравнивания по ширине' 
}) => {
    return (
      <ScrollView>
        <CustomText
          textColor={textColor}
          text={text}
          flex="center"
          numberOfLines={null}
        />
      </ScrollView>
    );
};

export default Note;

