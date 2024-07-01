import { ItemContainerWithImg } from "../../../Pull/Group";

import editItemIcon from '@../../../assets/edit-item-button.png'

const GroupItemBlock = ({text='Group1'}) => {
    
    const onPressHandler = () => {
        console.log('Нажата кнопка редактирования')
    }

    return(
        <ItemContainerWithImg text={text} img={editItemIcon} onPressHandler={onPressHandler} />
    )
}

export default GroupItemBlock;
