import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TestPage, MainPage, PageUserEntrypoint } from '../../Pages';
import { navigationRef } from './Rules/relocate-page';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const token = localStorage.getItem("authToken");
  console.log('Auth token:', token);

    return (
      <NavigationContainer ref={navigationRef} independent={true}>
        <Stack.Navigator initialRouteName={"Main"}>
        <Stack.Screen 
            name="Test" 
            component={TestPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Main" 
            component={MainPage}
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

