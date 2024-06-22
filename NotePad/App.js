import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import {store} from './App/Processes/Store';

import AppNavigation from './App/Processes/Navigation/stack';


const loadFonts = async () => {
  await Font.loadAsync({
    'Montserrata-bold': require('./assets/fonts/MontserratAlternates-Bold.ttf'),
    'Montserrata-medium': require('./assets/fonts/MontserratAlternates-Medium.ttf'),
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
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
    <Provider store={store} >
      <AppNavigation/>
    </Provider>
  );
}