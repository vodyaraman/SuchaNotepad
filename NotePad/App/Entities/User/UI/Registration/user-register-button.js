import UserSubmitButton from "../../../../Pull/Buttons/submit";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';
import React from 'react';

const UserRegisterButton = ({onPressHandler}) => {
    return(
        <UserSubmitButton 
            textColor={'white'} 
            text={'Register'}
            fontSize={hg('2.8%')}
            fontWeight={'bold'}
            onPressHandler={onPressHandler} />
    )
};

export default UserRegisterButton;