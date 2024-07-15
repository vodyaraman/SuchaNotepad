import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { NotePlate } from '../../../Pull/Note'; // Ensure this path is correct
import { EmptyGroupMessage } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';
import { NoteUser, NoteTitle } from '../../../Entities/Note';
import { Show } from '../../../Processes/Navigation/Rules';
import { useGetNotes } from '../Hooks/use-get-notes';

const Overlook = React.memo(() => {
    const { notes, isLoading, error } = useGetNotes();
    console.log(`Re-render note's overlook with data ${notes}`);

    const onPressHandler = (id) => {
        Show.Check(id);
        console.log({id});
    };

    const noteListControlRender = (note, index) => {
        console.log(note._id)
        return (
            <NotePlate 
                key={index}
                LeftSlot={() => <NoteUser userName={note.ownerId.name} />}
                RightSlot={() => <NoteTitle title={note.title} />}
                OnPress={() => onPressHandler(note._id)}
            />
        );
    };

    if (isLoading) {
        return (<Text style={{ fontWeight: '900', textAlign: 'center' }}>Loading...</Text>);
    }

    return (
        <View style={styles.mainContainer}>
            {error && <EmptyGroupMessage />}
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
        paddingHorizontal: 15,
    },
    scrollContainer: {
        borderRadius: 25, 
    },
    scrollContentContainer: {
        height: '100%',
    }
});