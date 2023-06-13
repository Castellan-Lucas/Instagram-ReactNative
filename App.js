import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Titulo from './titulo.js';
import Stories from './stories.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Stories/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
