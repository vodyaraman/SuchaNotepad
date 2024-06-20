import React from "react";
import { StyleSheet } from 'react-native';
import { MainWidgetPlate} from '../../Pull/Note/index';
import { CalendarFeature } from '../../Features/Calendar/index';
import NavigationButtons from "../../Features/Navigation";
import { MainNavigation } from "../../Processes/Navigation";

const Notepad = () => {
    return (
        <>
            <CalendarFeature />
            <MainWidgetPlate style = {styles.NotepadStyle}> 
                <MainNavigation/>
            </MainWidgetPlate>
            <NavigationButtons />
        </>
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