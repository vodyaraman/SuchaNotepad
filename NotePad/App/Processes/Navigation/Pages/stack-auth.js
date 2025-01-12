import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserReg, UserAuth, UserMailCode } from '../../../Features/User';
import { authNavigationRef } from '../Rules/show-feature';

const AuthStack = createStackNavigator();

export default function AuthNavigation() {
    
    return (
        <NavigationContainer ref={authNavigationRef} independent={true}>
            <AuthStack.Navigator initialRouteName="Authorisation">
                <AuthStack.Screen 
                    name="Registration" 
                    component={UserReg}
                    options={{ headerShown: false }}
                />
                <AuthStack.Screen 
                    name="Authorisation" 
                    component={UserAuth}
                    options={{ headerShown: false }}
                />
                <AuthStack.Screen 
                    name="ValidateEmail" 
                    component={UserMailCode}
                    options={{ headerShown: false }}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}
