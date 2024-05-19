import React from "react";
import { StyleSheet } from 'react-native';
import { MainWidgetPlate} from '../../Pull/Note/index';
import { NoteOverlook, NoteCheck, NoteWrite } from "../../Features/Note";
import { Register } from "../../Features/User/index"
import { CalendarFeature } from '../../Features/Calendar/index';
import { NavigationPlate } from "../../Entities/Navigation";

// import { TaskButton, SwipeButton } from "../../Pull/Buttons";

// import GroupImage from "../../../assets/swipeGroupButton.png"
// import SettingsImage from "../../../assets/swipeSettingsButton.png"

/*
      
       <MainWidgetPlate style = {styles.NotepadStyle}>
                <NoteCheck/>
            </MainWidgetPlate>
            <MainWidgetPlate style = {styles.NotepadStyle}>
                <NoteOverlook/>
                <Register/>
            </MainWidgetPlate>
      */

const Notepad = () => {
    return (
        <>
            <CalendarFeature />
            <MainWidgetPlate style = {styles.NotepadStyle}>
                
                <NoteWrite/>
            </MainWidgetPlate>
            {/* <NavigationPlate
            
                Caesar={<SwipeButton side='left' img={GroupImage} />}
                Bismark={<TaskButton  />}
                Napoleon={<SwipeButton side='right' img={SettingsImage} />}
            />   */}
            <NavigationPlate />

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