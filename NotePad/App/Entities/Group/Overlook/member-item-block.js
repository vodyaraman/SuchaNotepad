import { ItemContainerWithImg, BlockWithTitleBetweenLines } from "../../../Pull/Group";

import deleteIcon from '@../../../assets/delete-item-button.png'
import adminIcon from '@../../../assets/admin-item-icon.png'

const MembersItemBlock = () => {
    
    const onDeleteHandler = () => {
        console.log('Нажата кнопка удалить')
    }

    //Заготовка логики получения списка пользователей группы, с сервера приходит массив объектов
    //И далее этот массив обрабатывается и на его основе формируются компоненты
    const membersArrResponse = [ 
        {name: 'User1', role: 'admin'}, 
        {name: 'User2', role: 'user'}, 
        {name: 'User3', role: 'user'},
        {name: 'User4', role: 'user'},
        {name: 'User5', role: 'user'},
    ]

    const memberRender = (user, index) => {
        return(
            <ItemContainerWithImg 
                key={index}
                text={user.name} 
                img={user.role === 'admin' ? adminIcon : deleteIcon}
                textColor={user.role === 'admin' ? '#FCC419' : 'white'}
                onPressHandler={user.role === 'user' ? onDeleteHandler : ()=>console.log('Це админ')} />
        )
    }

    return(
        <BlockWithTitleBetweenLines text='Members' scroll={true}>
            {membersArrResponse.map((user, index) => memberRender(user, index))}
        </BlockWithTitleBetweenLines>
    )
}

export default MembersItemBlock;