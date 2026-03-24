import {View, Text, StyleSheet} from 'react-native'
import { useState } from 'react';
import { Button, Card } from 'react-native-paper';

export default function Profaaa() {
  
  const [mensagem, setMensagem] = useState('OLá')
  const [somaUm, setSomaUm] = useState(0)

  function TrocaMsg() {
    if (mensagem == 'Olá'){
    setMensagem('Oi, trocamos de mensagem!')
    } else {
      setMensagem('Olá')
    }
  }

  function Contador(){
    setSomaUm(somaUm + 1)
  }

  function Diminuir() {
    if(somaUm > 0) {
    setSomaUm(somaUm - 1)
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{mensagem}</Text>

      <Button buttonColor='#d61d4eff' mode='contained' onPress={TrocaMsg}>
          pecione para trocar mensagem
      </Button>

      <Text style={styles.txt}>{somaUm}</Text>
      <View style={styles.botao}>

        <Button buttonColor='#d61dc6ff' mode='contained' onPress={Contador}>
          pecione para aumentar
        </Button>

        <Button buttonColor='#dc7208ff' mode='contained' onPress={Diminuir}>
          pecione para diminuir
        </Button>


      </View>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt : {
    fontSize: 30,
    color: '#c10d0dff'
  },
  botao : {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  }
})