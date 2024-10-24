import { type SQLiteDatabase } from 'expo-sqlite';

export const servicoBancodados = async (database: SQLiteDatabase) => {

    if (!database) {
        throw new Error("Banco de dados não fornecido");
    }

    try {
        const result = await database.execAsync(`
            CREATE TABLE IF NOT EXISTS Usuario (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                senha TEXT NOT NULL,
                email TEXT NOT NULL
            )
        `);
        console.log("Tabela Usuario criada com sucesso!", result);
    } catch (error) {
        console.error("Erro ao criar a tabela Usuario:", error);
        // throw error;
    }
}
