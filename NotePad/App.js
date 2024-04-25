import { StyleSheet, Text, View } from 'react-native';
import NotePlate from './App/Pull/Note/index.js';
import  {User}  from './App/Pull/User/index.js';

export default function App() {
  // В данный момент тестируем в корневом App все элементы, потом, когда доберёмся до первой страницы, это будем делать там, а в App будут только обозначены процессы
  // Используем хэш- код цвета rgb для NotePlate
  return (
    <View style={styles.container}>
      <NotePlate leftColor="#70ff63" rightColor="#5cf54e" height={40}>
        <User userColor="#ff1500" userName="Anton Saevskii"/>
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
