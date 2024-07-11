import React from 'react';
import { View } from 'react-native';
import { Show } from '../../../Processes/Navigation/Rules';
import { useRoute } from '@react-navigation/native';

import { GroupItemBlock, LinkItemBlock, MembersItemBlock} from '../../../Entities/Group';
import { UserBackgroundPlate } from '../../../Pull/User';

import { BackButton } from '../../../Pull/Buttons';

const Control = () => {
    const route = useRoute()
    console.log(route.params)
    
    return (
        <UserBackgroundPlate firstColor='#EC7171' secondColor='#EC7171'>
            <BackButton onPressHandler={() => Show.OverlookGroup()} />

            <View style={{gap: 50}}>
                <GroupItemBlock />
                <MembersItemBlock />
                <LinkItemBlock />
            </View>
            
        </UserBackgroundPlate>
    );
};

export default Control;
