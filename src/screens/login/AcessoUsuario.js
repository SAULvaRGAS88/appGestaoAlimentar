import axios from 'axios';

export const AcessoUsuario = async (email, password) => {
    try {
        console.log('email', email, 'password', password);
        const { data } = await axios.get(`https://apistrapi-210b.onrender.com/api/usuario-app-gestao-alimentars?filters[email][$eq]=${email}&filters[senha][$eq]=${password}`);
        return data;
    } catch (error) {
        console.error('Erro ao acessar API de login do usuário:', error);
    }
}
