import { RotateAnim } from "../../Pull/Calendar/index";
import { CalendarWindow } from "../../Pull/Calendar/index";
import { StyleSheet, View } from "react-native";

export function CalendarEntitie({setSelected, isVisible}){

    return(
        <View style={styles.container}>
            <RotateAnim  isVisible={isVisible}>
                <CalendarWindow setSelected={setSelected} isVisible={isVisible} />
            </RotateAnim>
        </View> 
    );
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: "100%",
        width: "100%",
        padding: 5,
        zIndex: 1,
    }
})
