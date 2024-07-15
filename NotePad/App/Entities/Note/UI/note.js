import React from "react";
import { ScrollView, ActivityIndicator, Text } from "react-native";
import { useNoteText } from '../Hooks/note-api-hooks';

const Note = () => {
  const [noteText, isLoading, error] = useNoteText();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading note: {error.message}</Text>;
  }

  console.log(`Note is rendered with text: ${noteText}`);

  return (
    <ScrollView>
      <Text
        style={{ color: '#000', textAlign: 'center' }}
        numberOfLines={null}
      >
        {noteText}
      </Text>
    </ScrollView>
  );
};

export default Note;
