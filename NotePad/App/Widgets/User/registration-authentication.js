import React from "react";
import { StyleSheet } from 'react-native';
import { MainWidgetPlate} from '../../Pull/Note/index';
import { UserReg } from "../../Features/User/index"

const RegAndAuth = () => {
    return (
        <>
            <MainWidgetPlate style = {styles.NotepadStyle}> 
                <UserReg/>
            </MainWidgetPlate>
        </>
)};

export default RegAndAuth;

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