import { StyleSheet, View } from "react-native";
import { CustomText } from "../../../Pull/Note";

const NoteUser = () => {
    return (
    <View style = {styles.noteUser}>
        <CustomText textColor="#fa0900" text="Антон Саевский" flex="start"/>
    </View>
)};

export default NoteUser;

const styles = StyleSheet.create({
    noteUser: {
        height: "100%",
        width: "100%"
    },
})