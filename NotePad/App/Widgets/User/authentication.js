import React from 'react';
import { AuthNavigation } from '../../Processes/Navigation';
import { UserBackground } from '../../Entities/User';

const Authentication = () => {
    return (
        <UserBackground>
            <AuthNavigation />
        </UserBackground>
    );
};

export default Authentication;
