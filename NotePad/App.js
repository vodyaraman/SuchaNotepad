import { StyleSheet, Text, View } from 'react-native';
import SubmitButton from './App/Pull/User/index.js';
import NotePlate from './App/Pull/Note/index.js';

export default function App() {
  // В данный момент тестируем в корневом App все элементы, потом, когда доберёмся до первой страницы, это будем делать там, а в App будут только обозначены процессы
  return (
    <View style={styles.container}>
      <NotePlate leftColor="#70ff63" rightColor="#70ff63" usefulText={<Text style={styles.text}>Open up App.js to start working on your app!</Text> }>     
        <SubmitButton/>
      </NotePlate>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "black",
  }
});
