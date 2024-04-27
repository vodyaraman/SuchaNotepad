import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TestPage } from './App/Pages';

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
    <TestPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'strech',
    justifyContent: 'center',
  },
});
