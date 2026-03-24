import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-paper';
import { drivers } from './data/drivers';

export default function App() {

  //const motoristas = drivers[1]

  return (
    <ScrollView style={styles.}>
    <View style={styles.container}>
     {drivers.map{(motoristas) => {
      <Card>
        <Card.Cover source={{uri: motoristas.image}}/>
        <Card.Content style={styles.cards}>

        <Text style={styles.txt}>{motoristas.name}</Text>
        <Text style={styles.txt}>{motoristas.description}</Text>
        <Text style={styles.txt}>{motoristas.team}</Text>
        <Text style={styles.txt}>{motoristas.country}</Text>
        <Text style={styles.txt}>{'⭐'.repeat(motoristas.stars)}</Text>

       </Card.Content>
     </Card>
     }}}
  </View>
  </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem : {
    width: 300,
    height: 300
  },

  cards : {
    alignItems: 'center',
    textAlign: 'center'
  },

  txt: {
    fontSize: 20,
    textAlign: 'center'
  }
})

