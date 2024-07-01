import React from 'react';
import { View } from 'react-native';

import { BlockWithTitleBetweenLines } from '../../../Pull/Group';
import { GroupItemBlock, LinkItemBlock, MemberItemBlock } from '../../../Entities/Group';
import { UserBackgroundPlate } from '../../../Pull/User';

import { BackButton } from '../../../Pull/Buttons';

const Overlook = () => {
    return (
        <UserBackgroundPlate firstColor='#EC7171' secondColor='#EC7171'>
            <View>
                <BackButton />
            </View>
            <View style={{gap: 50}}>
                <BlockWithTitleBetweenLines text='Group'>
                    <GroupItemBlock />
                </BlockWithTitleBetweenLines>

                <BlockWithTitleBetweenLines text='Members' scroll={true}>
                    <MemberItemBlock text='user1' admin={true} />
                    <MemberItemBlock text='user2' />
                    <MemberItemBlock text='user3' />
                    <MemberItemBlock text='user4' />
                </BlockWithTitleBetweenLines>

                <BlockWithTitleBetweenLines text='Link'>
                    <LinkItemBlock />
                </BlockWithTitleBetweenLines>
            </View>
        </UserBackgroundPlate>
    );
};

export default Overlook;
