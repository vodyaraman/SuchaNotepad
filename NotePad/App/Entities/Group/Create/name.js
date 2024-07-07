import React, {useState} from 'react';
 
import { UserInputContainer } from '../../../Pull/User';
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import groupIcon from '@../../../assets/group.png'

//Импорт контекста
import { useGroup } from '../Helpers/group-manager';

//Импорт Валидации
import { groupNameValidation, checkGroupNameAvailability } from '../Helpers/groupNameValidation';
import { checkAvailabilityEmail } from '../../User/Helpers/email-validation';
import { setError } from '../../../Processes/Group';

const GroupName = ({ setStatus, fontWeight = 'bold' }) => {

    const [borderColor, setBorderColor] = useState('white')
    const { updateOwnerId, updateGroupName, groupState, setErrors } = useGroup();

    const onChangeGroupName = (groupName) => {
        const status = groupNameValidation(groupName) 
        if(status.status){
            setBorderColor('white')
            console.log('Валидация пройдена')
            updateGroupName(groupName)
        }
        else if(groupName === ''){
            setBorderColor('white')
        }
        else{
            setBorderColor('red')
        }
    }

    const onBlurGroupName = async () => {
        const currentGroupName = groupState.groupName
        const status = await checkAvailabilityEmail(currentGroupName)
        if (status) {
            console.log('Данное имя свободно.')
            updateOwnerId(1)
            setBorderColor('white')
        } else{
            setBorderColor('red')
            setError(status.message)
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