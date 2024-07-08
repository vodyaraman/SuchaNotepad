import React, {useState} from 'react';

import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';

import { Show } from '../../../Processes/Navigation/Rules';

//Импорт контекста
import { useGroup } from '../../Group';

export const GroupAddButton = ({setStatus, status}) => {
    const {groupState, create} = useGroup();
    

    const handleGroupCreateShow = () => {
        Show.Create()
        setStatus(true)
    }

    const handleGroupCreate = async () => {
        const response = await create(groupState)
        if (response.status === 'success') {
            console.log(response.message) //Потом сделать нормальный вывод окон с сообщениями и ошибками
            setStatus(false)
            Show.OverlookGroup()
        } else{
            console.log('Что то пошло не так')
        }
    }

    return (
        <>
            <TaskButton handleClick={status ? handleGroupCreate : handleGroupCreateShow} img={AddTask} backgroundColor={status ? '#fff' : '#FFF4C4'} />
        </>
    );
};
