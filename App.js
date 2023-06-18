import { StyleSheet, Text, View, Image} from 'react-native';
import Titulo from './titulo.js';
import Stories from './stories.js';
import Menu from './Menu.js';
import Post from './Post.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Stories/> 
      <Menu/> 
      <Post/> 
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
