import React, { useState, useEffect } from 'react'; // Adicione useEffect
import { View, Text, TextInput, Button } from 'react-native';
import openDB from '../DataBase/db';

export default function Produtos() {
    const [db, setDb] = useState(null); // Estado para guardar o banco
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    // Carrega o banco ao iniciar a tela
    useEffect(() => {
    async function init() {
        try {
            const database = await openDB();
            console.log("Banco carregado com sucesso!");
            setDb(database);
        } catch (error) {
            console.error("ERRO AO ABRIR BANCO:", error);
            alert("Falha ao ligar ao banco de dados.");
        }
    }
    init();
}, []);

    const SalvarProduto = async () => {
        if (!db) {
            alert("Banco de dados ainda não carregou!");
            return;
        }

        try {
            // Agora o runAsync vai existir
            await db.runAsync(
                `INSERT INTO produtos (name, valor) VALUES (?, ?)`,
                [nome, parseFloat(valor) || 0]
            );
            alert("Produto adicionado!");
            setNome('');
            setValor('');
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Produto</Text>
            <TextInput placeholder='Nome' value={nome} onChangeText={setNome} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <TextInput placeholder='Valor' value={valor} onChangeText={setValor} keyboardType="numeric" style={{ borderBottomWidth: 1, marginBottom: 20 }} />
            <Button title="SALVAR PRODUTO" onPress={SalvarProduto} />
        </View>
    );
}