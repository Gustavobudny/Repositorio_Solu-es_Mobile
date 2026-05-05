import{View, Image, StyleSheet, Text,  TextInput, Button, TouchableOpacity} from 'react-native';

export default function Logar ({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.imagens} source={require('../Sources/neymar.jpg')} />
            <Text style={styles.texto}>loguin</Text>
            <TextInput  style={styles.input} placeholder='Usuario'></TextInput>
            <TextInput  style={styles.input} placeholder='Senha'></TextInput>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}> 
                <Text>acessar loguin</Text>
            </TouchableOpacity>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6bcfe3ff'
    },

    texto: {
        fontSize: 30,
        color: '#072180ff',
        fontWeight: 'bold'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10
    },

    imagens: {
        height: 150,
        width: 200,
        borderColor: '#0b0973ff',
        borderWidth: 5
    },

    botao : {
        width: 300,
        height: 200,
        backgroundColor: '#e11b1bff'
    }
})