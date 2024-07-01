import React from 'react';

import { UserBackgroundPlate } from '../../../Pull/User';

import { GroupName, GroupLink } from '../../../Entities/Group';

const Create = () => {
    return (
        <UserBackgroundPlate firstColor='#EC7171' secondColor='#DA8E8E'>
            <GroupName />
            <GroupLink />
        </UserBackgroundPlate>
    );
};

export default Create;
