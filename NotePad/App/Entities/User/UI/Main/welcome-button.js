import React, {useState} from 'react';

import UserSubmitButton from '../../../../Pull/Buttons/submit';

import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

export const WelcomeButton = ({text, onPressTrain, onPressWithoutTrain}) => {

    return(
        <UserSubmitButton
            text={text}
            textColor={'white'}
            fontSize={hg('2%')}
            fontWeight={'bold'}
            fontFamily={'Montserrata-medium'}
            onPressHandler={onPressWithoutTrain} />
    )
}