import { StyleSheet, View } from "react-native";
import { CustomText } from "../../../Pull/Note";
//    <View style = {styles.noteUser}>
const NoteUser = () => {
    return (
    <>
        <CustomText textColor="#fa0900" text="Антон Саевский" flex="start"/>
    </>
)};

export default NoteUser;

const styles = StyleSheet.create({
    noteUser: {
        height: "100%",
        width: "100%",
    },
})