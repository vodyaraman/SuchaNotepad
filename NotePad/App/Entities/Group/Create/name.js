import React, {useState} from 'react';
 
import { UserInputContainer } from '../../../Pull/User';
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import groupIcon from '@../../../assets/group.png'

//Импорт контекста
import { useGroup } from '../Helpers/group-manager';

const GroupName = ({ fontWeight = 'bold', groupName = 'Pandas' }) => {

    const [borderColor, setBorderColor] = useState('white')
    const {updateGroupName} = useGroup();

    const onChangeGroupName = (groupName) => {
        updateGroupName(groupName)
    }

    const onBlurGroupName = async () => {
        console.log('Blur group name input')
    }

    return (
        <UserInputContainer 
            img={groupIcon} 
            fontSize={hg('2.3%')} 
            fontFamily={'Lexend-Medium'} 
            onChangeHandler={onChangeGroupName}
            onBlurHandler={onBlurGroupName} 
            placeholder={'Group name:'}
            borderBottomColor={borderColor} />
    );
};

export default GroupName;