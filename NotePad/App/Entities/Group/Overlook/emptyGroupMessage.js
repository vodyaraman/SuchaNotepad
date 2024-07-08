import { EmptyMessage } from "../../../Pull/Note";
import arrowDown from '@../../../assets/arrow-down.png'

const EmptyGroupMessage = () => {
    return(
        <EmptyMessage 
            firstLineText='No groups to display'
            secondLineText='Please click on plus button to create' 
            img={arrowDown}
        />
    )
}

export default EmptyGroupMessage;