import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Exemplo1AsyncStorage() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeSalvo, setNomeSalvo] = useState()

    const SalvarPessoa = async () => {
        const pessoa = {
            nome: nome,
            senha: senha
        }

        try {
            const jsonValue = JSON.stringify(pessoa);
            await AsyncStorage.setItem('@pessoa', jsonValue);
            alert("Pessoa salva!");
        } catch (e) {
            console.log(e)
        }
    };

    const MostrarPessoa = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@pessoa');
            if (jsonValue != null) {
                const pessoa = JSON.parse(jsonValue)
                setNomeSalvo(pessoa)
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        MostrarPessoa();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>

            <TextInput
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={SalvarPessoa}>
                <Text style={styles.textobotao}>Salvar Pessoa</Text>
            </TouchableOpacity>

            {nomeSalvo && (
                <View style={styles.result}>
                    <Text style={styles.resultado}>Nome: {nomeSalvo.nome}</Text>
                    <Text style={styles.resultado}>Senha: {nomeSalvo.senha}</Text>
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f1a',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 34,
        color: '#a78bfa',
        fontWeight: '800',
        marginBottom: 40,
        letterSpacing: 2
    },

    input: {
        width: '85%',
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        color: '#fff',
        borderWidth: 1,
        borderColor: 'rgba(167,139,250,0.3)',
        backdropFilter: 'blur(10px)' // efeito vidro (web compatível)
    },

    button: {
        width: '85%',
        padding: 16,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#7c3aed',
        shadowColor: '#7c3aed',
        shadowOpacity: 0.7,
        shadowRadius: 15,
        elevation: 10
    },

    textobotao: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 1
    },

    result: {
        marginTop: 30,
        width: '85%',
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'rgba(167,139,250,0.2)'
    },

    resultado: {
        color: '#e0e0ff',
        fontSize: 16,
        marginBottom: 6
    }
});