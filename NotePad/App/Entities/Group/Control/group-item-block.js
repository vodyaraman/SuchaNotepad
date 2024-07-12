import { ItemContainerWithImg, BlockWithTitleBetweenLines } from "../../../Pull/Group";

import editItemIcon from '@../../../assets/edit-item-button.png'

const GroupItemBlock = ({groupName}) => {
    
    const onPressHandler = () => {
        console.log('Нажата кнопка редактирования')
    }

    return(
        <BlockWithTitleBetweenLines>
            <ItemContainerWithImg text={groupName} img={editItemIcon} onPressHandler={onPressHandler} />
        </BlockWithTitleBetweenLines>
    )
}

export default GroupItemBlock;
