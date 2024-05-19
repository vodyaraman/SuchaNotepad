import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TestPage } from './App/Pages';
import { Provider } from 'react-redux';
import {store} from './App/Processes/Store';

const loadFonts = async () => {
  await Font.loadAsync({
    'Montserrata-bold': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
    'Montserrata-medium': require('./assets/fonts/MontserratAlternates-Medium.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.error(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <TestPage/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'strech',
    justifyContent: 'center',
  },
});
