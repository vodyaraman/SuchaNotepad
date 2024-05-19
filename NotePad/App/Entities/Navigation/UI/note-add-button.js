import { TaskButton } from "../../../Pull/Buttons";
import AddTask from '../../../../assets/plusTaskButton.png';
import { useNoteData } from "../../Note/Helpers/note-manager";


export const NoteAddButton = () => {
    const data = useNoteData()

    const handleClick = () => {
        console.log(data)
    }

    return(
        <TaskButton handleClick={handleClick} img={AddTask} />
    )
}