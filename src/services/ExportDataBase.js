import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export const exportDatabase = async () => {
    const dbName = 'appGestaoAlimentar.db';  // Substitua pelo nome do seu banco de dados
    const dbUri = `${FileSystem.documentDirectory}SQLite/${dbName}`;
    console.log('Database URI:', dbUri);

    // Verifica se o arquivo existe
    const fileInfo = await FileSystem.getInfoAsync(dbUri);
    if (fileInfo.exists) {
        // Compartilhar o arquivo
        await Sharing.shareAsync(dbUri);
    } else {
        console.log('O arquivo do banco de dados não existe.');
    }
};

