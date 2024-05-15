import { SafeAreaView, StyleSheet } from "react-native";

import { SwipeButton, TaskButton } from "../../../Pull/Buttons";

import SettingsImage from "../../../../assets/swipeSettingsButton.png";
import GroupImage from "../../../../assets/swipeGroupButton.png";
import AddTask from '../../../../assets/plusTaskButton.png';

export const NavigationPlate = () => {

    return(
        <SafeAreaView style={styles.container}>
            <SwipeButton side={'left'} img={GroupImage} />
            <TaskButton img={AddTask} />
            <SwipeButton side={'right'} img={SettingsImage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '9vh',
        display: 'flex',
        position: 'absolute',
        bottom: '3%',

        flexDirection: 'row',
        justifyContent: 'space-between',

        zIndex: 5,
    },
})