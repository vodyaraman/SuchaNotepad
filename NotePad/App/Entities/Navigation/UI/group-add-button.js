import React, {useState} from 'react';

import AddTask from '../../../../assets/plusTaskButton.png';
import { TaskButton } from '../../../Pull/Buttons';

import { Show } from '../../../Processes/Navigation/Rules';

//Импорт контекста
import { useGroup } from '../../Group';
import { useNavigationState } from '@react-navigation/native';

export const GroupAddButton = () => {
    const {groupState, create} = useGroup();
    const currentRoute = useNavigationState(state => state.routes[state.index].name);

    const handleGroupCreate = async () => {
        if (currentRoute === 'Create') {
            const response = await create(groupState)
            if (response.status === 'success') {
                console.log(response.message)
                Show.OverlookGroup()
            } else{
                console.log('Что то пошло не так')
            }
        } else {
            Show.Create();
        }
    }

    return (
        <>
            <TaskButton handleClick={handleGroupCreate} img={AddTask} backgroundColor={status ? '#fff' : '#FFF4C4'} />
        </>
    );
};
