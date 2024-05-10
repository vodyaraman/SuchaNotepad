import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { InputText } from "../../../Pull/Note";

const EditNote = ({ 
  textColor = '#000', 
  text = 'Текст по умолчанию достаточно большой, возомжно, он занимает больше одной строки и ему требуется какое-то дополнительное форматирование по типу выравнивания по ширине' 
}) => {
    return (
      <ScrollView style={styles.container}>
        <InputText
          textColor={textColor}
          text={text}
          flex="center"
          numberOfLines={null}
        />
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default EditNote;