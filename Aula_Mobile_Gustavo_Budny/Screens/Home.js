import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-paper';
import {drivers} from '../data/drivers'


export default function Home() {

  
  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>TITULO</Text>

      {drivers.map((drivers) => (

        <Card key={drivers.id}>
          <Card.Cover source={{ uri: drivers.image }} />
          <Card.Content style={styles.cards}>
            <Text style={styles.txt}>{drivers.name}</Text>
            <Text style={styles.txt}>{drivers.description}</Text>
            <Text style={styles.txt}>{drivers.team}</Text>
            <Text style={styles.txt}>{drivers.country}</Text>
            <Text style={styles.txt}>{'⭐'.repeat(drivers.stars)}</Text>
          </Card.Content>  
        </Card>  
      ))} 

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
  
  justifyContent: 'center',
  alignItems: 'center'
  },
  txt:{
    fontSize: 20,
    textAlign: 'justify'
  },
  img:{
    width: 300,
    height: 300
  },
  cards:{
    alignItems: 'center',
  
  
  }

  
})