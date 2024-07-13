import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

// Импорт составных компонентов
import { NotePlate } from '../../../Pull/Note';
import { EmptyGroupMessage } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

// Импорт навигации
import { Show } from '../../../Processes/Navigation/Rules';

// Импорт кастомного хука fetchBaseQuery для запроса на сервер
import { useGetNotes } from '../Hooks/use-get-notes';

// Импорт компонентов для отображения содержимого заметок
import { NoteUser, NoteTitle } from '../../../Entities/Note';

const Overlook = () => {
    const { notes, isLoading, error } = useGetNotes();
    console.log(`Re-render note's overlook with data ${notes}`)

    const onPressHandler = (id) => {
        Show.Check({ id });
    };

    const noteListControlRender = (note) => {
        return (
            <NotePlate 
                key={note._id}
                leftColor={"#9CFFF3"} 
                rightColor={"#A2EFE6"}
                leftSlot={<NoteUser userName={note.ownerId.name} />}
                rightSlot={<NoteTitle title={note.title} />}
                onPress={() => onPressHandler(note._id)}
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
                {notes.map(note => noteListControlRender(note))}
            </ScrollView>
        </View>
    );
};

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



