import * as SQLite from 'expo-sqlite';

export default async function openDB() {
    // Importante: use openDatabaseAsync para a API nova
    const db = await SQLite.openDatabaseAsync('metadados.db');
    
    // Criar a tabela imediatamente ao abrir
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT, 
            valor REAL
        );
    `);
    return db;
}