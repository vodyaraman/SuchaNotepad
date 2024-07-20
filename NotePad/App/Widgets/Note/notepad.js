import React from "react";
import { MainWidgetPlate} from '../../Pull/Note/index';
import { CalendarFeature } from '../../Features/Calendar/index';
import { NotepadNavigation } from "../../Processes/Navigation";
import { NavigationButtons } from "../../Features/Navigation";

const Notepad = () => {
    return (
        <>
            <CalendarFeature />
            <MainWidgetPlate> 
                <NotepadNavigation/>
            </MainWidgetPlate>
            <NavigationButtons screen="note"/>
        </>
)};

export default Notepad;