// import { useNoteData } from "../../Note/Helpers/note-manager";

export const NavigationPlate = ({children}) => {

    // const handleClick = () => {
    //     const data = useNoteData();
    //     console.log(data)
    // }

    return(
        <SafeAreaView style={styles.container}>
            {/* <SwipeButton side={'left'} img={GroupImage} />
            <TaskButton handleClick={handleClick} img={AddTask} />
            <SwipeButton side={'right'} img={SettingsImage} /> */}
            {children}
        </SafeAreaView>
    )
}