import React, {useState} from 'react';
 
import { UserInputContainer } from '../../../Pull/User';
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

import linkIcon from '@../../../assets/group-link.png'

const GroupLink = ({ fontWeight = 'bold', groupLink = '@fkwpp1214dsdsw2' }) => {

    const [borderColor, setBorderColor] = useState('white')

    const onChangeLink = (groupLink) => {
        console.log(groupLink)
    }

    const onBlurLink = async () => {
        console.log('Blur link input')
    }

    return (
        <UserInputContainer 
            img={linkIcon} 
            fontSize={hg('2.3%')} 
            fontFamily={'Lexend-Medium'} 
            onChangeHandler={onChangeLink}
            onBlurHandler={onBlurLink} 
            placeholder={'Invate link:'}
            borderBottomColor={borderColor} />
    );
};

export default GroupLink;