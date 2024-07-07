import React, {useState} from 'react';

import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';

import { Show } from '../../../Processes/Navigation/Rules';

//Импорт контекста
import { useGroup } from '../../Group';

export const GroupAddButton = ({setStatus, status}) => {
    const {create, groupState} = useGroup();


    const handleGroupCreateShow = () => {
        Show.Create()
        setStatus(true)
    }

    const handleGroupCreate = () => {
        create(groupState)
        Show.Control()
    }

    return (
        <>
            <TaskButton handleClick={status ? handleGroupCreate : handleGroupCreateShow} img={AddTask} backgroundColor={status ? '#fff' : '#FFF4C4'} />
        </>
    );
};
