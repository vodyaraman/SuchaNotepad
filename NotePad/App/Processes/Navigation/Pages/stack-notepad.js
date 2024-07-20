import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NoteOverlook, NoteCheck, NoteWrite } from '../../../Features/Note';
import { notepadNavRef } from '../Rules/show-feature';

const NotepadStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent', // Убирает фон
    },
};

export default function NotepadNavigation() {
    return (
        <NavigationContainer ref={notepadNavRef} theme={MyTheme} independent={true}>
            <NotepadStack.Navigator 
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
                <NotepadStack.Screen 
                    name="Check" 
                    component={NoteCheck}
                />
                <NotepadStack.Screen 
                    name="Write" 
                    component={NoteWrite}
                />
                <NotepadStack.Screen 
                    name="Overlook" 
                    component={NoteOverlook}
                />
            </NotepadStack.Navigator>
        </NavigationContainer>
    );
};
