import React from "react";
import { StyleSheet } from 'react-native';
import { MainWidgetPlate} from '../../Pull/Note/index';
import { CalendarFeature } from '../../Features/Calendar/index';
import NavigationButtons from "../../Features/Navigation";
import { NotepadNavigation } from "../../Processes/Navigation";
import { NoteManagerProvider } from "../../Entities/Note";

const Notepad = () => {
    return (
        <NoteManagerProvider>
            <CalendarFeature />
            <MainWidgetPlate style = {styles.NotepadStyle}> 
                <NotepadNavigation/>
            </MainWidgetPlate>
            <NavigationButtons />
        </NoteManagerProvider>
)};

export default Notepad;

const styles = StyleSheet.create({
    NotepadStyle: {
        zIndex: 1,
        paddingTop: "10%",
        paddingBottom: "25%",

        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});