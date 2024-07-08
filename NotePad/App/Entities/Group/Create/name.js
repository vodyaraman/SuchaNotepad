import React, {useState, useEffect} from 'react';
 
import { UserInputContainer } from '../../../Pull/User';
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import groupIcon from '@../../../assets/group.png'

//Импорт контекста
import { useGroup } from '../Helpers/group-manager';

//Импорт Валидации
import { groupNameValidation, checkGroupNameAvailability } from '../Helpers/groupNameValidation';

const GroupName = ({ }) => {

    const [borderColor, setBorderColor] = useState('white')
    const { updateGroupName, updateValidation, groupState, setErrors } = useGroup();

    const onChangeGroupName = (groupName) => {
        updateGroupName(groupName)
    }

    const onBlurGroupName = async () => {
        const currentGroupName = groupState.groupName
        const validation = groupNameValidation(currentGroupName) 

        if(validation.status){
            updateValidation(true)
            setBorderColor('white')
        }
        else{
            updateValidation(false)
            setBorderColor('red')
            setErrors(['Название группы должно быть не менее 3х символов!'])
        }
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