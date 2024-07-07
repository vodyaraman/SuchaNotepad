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
            const availability = await checkGroupNameAvailability(currentGroupName)
            if(availability.status){
                console.log('Данное имя свободно.')
                updateValidation(true)
                setBorderColor('white')
            } else{
                setErrors(availability.message)
                updateValidation(false)
                setErrors(['This group already exists!'])
            }
        } else{
            setBorderColor('red')
            setErrors(validation.message)
            updateValidation(false)
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