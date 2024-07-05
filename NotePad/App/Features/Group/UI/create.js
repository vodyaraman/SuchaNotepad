import React from 'react';
import {View, StyleSheet} from 'react-native';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

import { UserBackgroundPlate } from '../../../Pull/User';

import { GroupName, GroupLink } from '../../../Entities/Group';

const Create = () => {
    return (
        <View style={Styles.mainContainer}>
            <UserBackgroundPlate firstColor='#EC7171' secondColor='#DA8E8E'>
                <GroupName />
                <GroupLink />
            </UserBackgroundPlate>
        </View>
    );
};

export default Create;

const Styles = StyleSheet.create({
    mainContainer:{
        height: hg('72%'),
        justifyContent: 'center',

        paddingHorizontal: 15,
    },
})
