import { StyleSheet, Text, View } from 'react-native';
import { Person, Gustavo } from './components/Profile';
import Profile from './components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Person/> */}
      <Text>eletro lixo!</Text>
      <Profile/>
      <Gustavo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#c02929ff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

