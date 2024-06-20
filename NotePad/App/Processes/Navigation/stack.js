import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TestPage, MainPage, PageUserEntrypoint } from '../../Pages';
import { navigationRef } from './Rules/stack-rules';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Test">
          <Stack.Screen 
            name="Main" 
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Test" 
            component={TestPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="User" 
            component={PageUserEntrypoint} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigation;

