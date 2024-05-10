import React from "react";
import { StyleSheet } from 'react-native';
import { MainWidgetPlate } from '../../Pull/Note/index';
import { NoteOverlook, NoteCheck } from "../../Features/Note";
import { Register } from "../../Features/User/index"
import { CalendarFeature } from '../../Features/Calendar/index';

/*  <SwipeButton side='left' img={require('../../assets/swipeGroupButton.png')} />
      <SwipeButton side='right' img={require('./assets/swipeSettingsButton.png')} />
      <TaskButton  /> */

const Notepad = () => {
    return (
        <>
            <CalendarFeature />
            <MainWidgetPlate style = {styles.NotepadStyle}>
                <NoteCheck/>
            </MainWidgetPlate>
            <MainWidgetPlate style = {styles.NotepadStyle}>
                <NoteOverlook/>
                <Register/>
            </MainWidgetPlate>
        </>
)};

export default Notepad;

const styles = StyleSheet.create({
    NotepadStyle: {
        zIndex: 1,
        top: "2%",
        paddingTop: "15%",
        paddingBottom: "15%",

        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});