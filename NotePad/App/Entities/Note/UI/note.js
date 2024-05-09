import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {CustomText} from "../../../Pull/Note";
import getNoteType from "../Helpers/note-type-helper";

const Note = ({ note }) => {
    const noteProps = getNoteType(note);
  
    return (
      <ScrollView style={styles.container}>
        <CustomText
          textColor={noteProps.textColor}
          text={noteProps.text}
          numberOfLines={noteProps.numberOfLines}
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

export default Note;
