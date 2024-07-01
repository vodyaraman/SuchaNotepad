import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Control, Create, Overlook } from '../../../Features/Group';
import { groupNavRef } from '../Rules/show-feature';

const GroupStack = createStackNavigator();

export default function GroupNavigation() {
    return (
        <NavigationContainer ref={groupNavRef} independent={true}>
            <GroupStack.Navigator initialRouteName="Control">
                <GroupStack.Screen 
                    name="Control" 
                    component={Control}
                    options={{ headerShown: false }}
                />
                <GroupStack.Screen 
                    name="Create" 
                    component={Create}
                    options={{ headerShown: false }}
                />
                <GroupStack.Screen 
                    name="Overlook" 
                    component={Overlook}
                    options={{ headerShown: false }}
                />
            </GroupStack.Navigator>
        </NavigationContainer>
    );
}
