import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CustomText, NotePlate, SmallUnderplate } from './App/Pull/Note/index.js';
import { NoteUser } from './App/Entities/User';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
    <View style={styles.container}>
      <NotePlate 
      leftColor="#70ff63" 
      rightColor="#5cf54e" 
      height={40} 
      leftSlot={<NoteUser />}
      rightSlot={<CustomText text="Длинный заголовок статьи"  textColor="#121010"/>}
      bottomSlot={
      <SmallUnderplate>
        <Text style={styles.Text}>15:45</Text>
      </SmallUnderplate>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'strech',
    justifyContent: 'center',
  },
  Text: {
    fontFamily: "Montserrata-medium",
    fontWeight: 500,
    fontSize: "9pt",
    color: 'black',
    justifyContent: 'center',
  },
});
