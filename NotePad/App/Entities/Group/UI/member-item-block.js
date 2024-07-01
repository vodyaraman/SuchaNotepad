import { ItemContainerWithImg } from "../../../Pull/Group";

import deleteIcon from '@../../../assets/delete-item-button.png'
import adminIcon from '@../../../assets/admin-item-icon.png'

const MemberItemBlock = ({text='User1', admin=false}) => {
    
    const onDeleteHandler = () => {
        console.log('Нажата кнопка удалить')
    }

    return(
        <ItemContainerWithImg text={text} img={admin ? adminIcon : deleteIcon} onPressHandler={onDeleteHandler} />
    )
}

export default MemberItemBlock;