import React from 'react';
import { View } from 'react-native';
import { Show } from '../../../Processes/Navigation/Rules';
import { useRoute } from '@react-navigation/native';

import { GroupItemBlock, LinkItemBlock, MembersItemBlock} from '../../../Entities/Group';
import { UserBackgroundPlate } from '../../../Pull/User';

import { BackButton } from '../../../Pull/Buttons';

import { useGetGroupDetailsQuery } from '../../../Processes/Group/API/group-api';

const Control = () => {
    const route = useRoute()
    const {id, groupName} = route.params

    const { data=[], isLoading, error } = useGetGroupDetailsQuery(id)

    return (
        <UserBackgroundPlate firstColor='#EC7171' secondColor='#EC7171'>
            <BackButton onPressHandler={() => Show.OverlookGroup()} />
            {/* Show.back() пока что почему то не работает */}

            <View style={{gap: 50}}>
                <GroupItemBlock groupName={groupName} />
                <MembersItemBlock members={data.members} />
                <LinkItemBlock invationLink={data.invationLink} />
            </View>
            
        </UserBackgroundPlate>
    );
};

export default Control;
