import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NoteOverlook, NoteCheck, NoteWrite } from '../../../Features/Note';
import { notepadNavRef } from '../Rules/stack-notepad-rules';

const NotepadStack = createStackNavigator();

export default function NotepadNavigation() {
    return (
        <NavigationContainer ref={notepadNavRef} independent={true}>
            <NotepadStack.Navigator initialRouteName="Overlook">
                <NotepadStack.Screen 
                    name="Check" 
                    component={NoteCheck}
                    options={{ headerShown: false }}
                />
                <NotepadStack.Screen 
                    name="Write" 
                    component={NoteWrite}
                    options={{ headerShown: false }}
                />
                <NotepadStack.Screen 
                    name="Overlook" 
                    component={NoteOverlook}
                    options={{ headerShown: false }}
                />
            </NotepadStack.Navigator>
        </NavigationContainer>
    );
};



