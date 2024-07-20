import React from 'react';
import { View, ScrollView, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { NotePlate } from '../../../Pull/Note';
import { EmptyGroupMessage } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';
import { NoteUser, NoteTitle } from '../../../Entities/Note';
import { Show } from '../../../Processes/Navigation/Rules';
import { useGetNotes } from '../Hooks/use-get-notes';

const Overlook = React.memo(() => {
    const { notes, isLoading, error } = useGetNotes();
    console.log(`Re-render note's overlook with data ${notes._id}`);

    const onPressHandler = (id) => {
        Show.Check(id);
        console.log({id});
    };

    const noteListControlRender = (note, index) => {
        console.log(note._id)
        return (
            <NotePlate 
                key={index}
                LeftSlot={() => <NoteTitle title={note.title} />}
                RightSlot={() => <NoteUser userName={note.ownerId.name} />}
                OnPress={() => onPressHandler(note._id)}
            />
        );
    };

    return (
        <View style={styles.mainContainer}>
            {error && <EmptyGroupMessage />}
            {isLoading && <ActivityIndicator size="large" color="#0000ff"/>}   
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContentContainer}
            >
                {notes.map((note, index) => noteListControlRender(note, index))}
            </ScrollView>
        </View>
    );
});

export default Overlook;

const styles = StyleSheet.create({
    mainContainer: {
        height: hg('72%'),
    },
    scrollContainer: {
        borderRadius: 25, 
    },
    scrollContentContainer: {
        height: '100%',
    }
});