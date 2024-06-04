import UserSubmitButton from "../../../../Pull/Buttons/submit";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';
import React, {useState} from 'react';

// Импорт контекста
import { useRegistration } from "../../Helpers/user-manager";

const SubmitRegisterButton = () => {
    const {register} = useRegistration()

    return(
        <UserSubmitButton 
            textColor={'white'} 
            text={'Register'}
            fontSize={hg('2.8%')}
            fontWeight={'bold'}
            onPressHandler={register} />
    )
}

export default SubmitRegisterButton;