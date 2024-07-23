import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Control, Create, Overlook } from '../../../Features/Group';
import { groupNavRef } from '../Rules/show-feature';

const GroupStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent', // Убирает фон
    },
};

export default function GroupNavigation({ setStatus }) {
    return (
        <NavigationContainer ref={groupNavRef} theme={MyTheme} independent={true}>
            <GroupStack.Navigator 
                initialRouteName="Overlook"
                screenOptions={{
                    headerShown: false, // Полностью убирает заголовок
                    cardStyle: { backgroundColor: 'transparent' }, // Убирает фон стека
                    headerStyle: {
                        shadowColor: 'transparent', // Убирает тень (iOS)
                        elevation: 0, // Убирает тень (Android)
                        borderBottomWidth: 0, // Убирает нижнюю границу
                        backgroundColor: 'transparent', // Убирает фон заголовка
                    },
                }}
            >
                <GroupStack.Screen 
                    name="Control" 
                    component={Control}
                />
                <GroupStack.Screen 
                    name="Create" 
                    component={Create}
                />
                <GroupStack.Screen 
                    name="Overlook" 
                    component={Overlook}
                />
            </GroupStack.Navigator>
        </NavigationContainer>
    );
}

