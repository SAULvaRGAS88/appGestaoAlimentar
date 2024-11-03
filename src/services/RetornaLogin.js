import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/FireBaseConfig';

// Método para retornar o login do usuário
export const RetornaLogin = async (email, senha) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'usuario'));
        const usuariosArray = querySnapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data(), 
        }));

        // Filtra o usuário com base no email e senha
        const usuario = usuariosArray.find(user => user.email === email && user.senha === senha);
        return usuario || null; 
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        return null;
    } finally {
       
    }
};
