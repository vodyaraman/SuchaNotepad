import React from "react";
import { StyleSheet } from 'react-native';
import { MainWidgetPlate} from '../../Pull/Note/index';
import { CalendarFeature } from '../../Features/Calendar/index';
import { NotepadNavigation } from "../../Processes/Navigation";
import { NavigationButtons } from "../../Features/Navigation";

const Notepad = () => {
    return (
        <>
            <CalendarFeature />
            <MainWidgetPlate style = {styles.NotepadStyle}> 
                <NotepadNavigation/>
            </MainWidgetPlate>
            <NavigationButtons screen="note"/>
        </>
)};

export default Notepad;

const styles = StyleSheet.create({
    NotepadStyle: {
        zIndex: 1,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});