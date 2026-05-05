import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { infos } from '../data/Informacoes';
import { Card } from 'react-native-paper';

export default function Pessoas() {

    return(

    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>TITULO</Text>

      {infos.map((informacoes) => (

        <Card key={informacoes.id}>
          <Card.Cover source={{ uri: informacoes.image }} />
          <Card.Content style={styles.cards}>
            <Text style={styles.txt}>{informacoes.name}</Text>
            <Text style={styles.txt}>{informacoes.idade}</Text>
            <Text style={styles.txt}>{informacoes.cidade}</Text>
            <Text style={styles.txt}>{informacoes.profissao}</Text>
          </Card.Content>  
        </Card>  
      ))} 

     </View>
    </ScrollView>
    )

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
    width: '300',
    height: '200'
  

  }

})