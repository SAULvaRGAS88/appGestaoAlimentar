import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/FireBaseConfig';

// Método para retornar o login do usuário
export const RetornaLogin = async (email, senha) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'usuario'));
        const usuariosArray = querySnapshot.docs.map(doc => ({
            id: doc.id, // adiciona o ID do documento
            ...doc.data(), // adiciona os dados do documento
        }));

        // Filtra o usuário com base no email e senha
        const usuario = usuariosArray.find(user => user.email === email && user.senha === senha);
        return usuario || null; // Retorna o usuário encontrado ou null se não houver
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        return null; // Retorna null em caso de erro
    } finally {
       
    }
};
