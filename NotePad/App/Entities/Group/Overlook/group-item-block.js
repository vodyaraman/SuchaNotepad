import { ItemContainerWithImg, BlockWithTitleBetweenLines } from "../../../Pull/Group";

import editItemIcon from '@../../../assets/edit-item-button.png'

const GroupItemBlock = () => {
    
    const onPressHandler = () => {
        console.log('Нажата кнопка редактирования')
    }

    const groupResponse = {groupName: 'Group1'}

    return(
        <BlockWithTitleBetweenLines>
            <ItemContainerWithImg text={groupResponse.groupName} img={editItemIcon} onPressHandler={onPressHandler} />
        </BlockWithTitleBetweenLines>
    )
}

export default GroupItemBlock;
