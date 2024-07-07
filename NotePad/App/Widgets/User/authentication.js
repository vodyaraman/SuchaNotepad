import React from 'react';
import { AuthNavigation } from '../../Processes/Navigation';
import { AuthProvider } from '../../Entities/User/Helpers/user-manager';

const Authentication = () => {
    return (
        <AuthProvider>
            <AuthNavigation />  
        </AuthProvider>
    );
};

export default Authentication;
