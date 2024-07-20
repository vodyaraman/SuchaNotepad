import React from 'react';
import { SubmitButton } from '../../../Pull/Buttons';
import { Show } from '../../../Processes/Navigation/Rules';

const BackButton = ({ navigationRef, textColor = '#FFFFFF', fontSize = 12, fontWeight = 'bold' }) => {
    const handleBackPress = () => {
        Show.back(navigationRef);
    };

    return (
        <SubmitButton
            text="Back"
            textColor={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onPressHandler={handleBackPress}
            color1="#61ACCC"
            color2="#94D4EF"
        />
    );
};

export default BackButton;