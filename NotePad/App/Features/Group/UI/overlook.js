import React from 'react';
import { View } from 'react-native';
import { Show } from '../../../Processes/Navigation/Rules';

import { GroupItemBlock, LinkItemBlock, MembersItemBlock} from '../../../Entities/Group';
import { UserBackgroundPlate } from '../../../Pull/User';

import { BackButton } from '../../../Pull/Buttons';

const Overlook = () => {
    return (
        <UserBackgroundPlate firstColor='#EC7171' secondColor='#EC7171'>
            <BackButton onPressHandler={() => Show.Control()} />

            <View style={{gap: 50}}>
                <GroupItemBlock />
                <MembersItemBlock />
                <LinkItemBlock />
            </View>
            
        </UserBackgroundPlate>
    );
};

export default Overlook;
