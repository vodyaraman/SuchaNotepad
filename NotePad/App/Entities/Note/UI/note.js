import React from "react";
import { ScrollView, ActivityIndicator, Text } from "react-native";

const Note = ({noteText}) => {

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error loading note: {error.message}</Text>;
  }

  console.log(`Note is rendered with text: ${noteText}`);

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
