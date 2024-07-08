import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Control, Create, Overlook } from '../../../Features/Group';
import { groupNavRef } from '../Rules/show-feature';

const GroupStack = createStackNavigator();

export default function GroupNavigation({setStatus}) {
    return (
        <NavigationContainer ref={groupNavRef} independent={true} >
            <GroupStack.Navigator initialRouteName="Overlook">
                <GroupStack.Screen 
                    name="Control" 
                    options={{ headerShown: false}}
                >
                    {(props) => <Control  {...props} />}
                </GroupStack.Screen>
                <GroupStack.Screen 
                    name="Create" 
                    options={{ headerShown: false }}
                >
                    {() => <Create />}
                </GroupStack.Screen>
                <GroupStack.Screen 
                    name="Overlook" 
                    component={Overlook}
                    options={{ headerShown: false }}
                />
            </GroupStack.Navigator>
        </NavigationContainer>
    );
}
