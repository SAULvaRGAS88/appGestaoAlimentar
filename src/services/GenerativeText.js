/**Aqui será o serviço que irá gerar o texto e compartilhar com a Aplicação */

import { GoogleGenerativeAI, } from '@google/generative-ai';
import { MY_API_KEY } from 'react-native-dotenv';

export const GoogleGenerativeAIText = async (prompt) => {

    const generateKey = new GoogleGenerativeAI(MY_API_KEY);

    try {
        const model = generateKey.getGenerativeModel({ model: 'gemini-pro' });

        const options = {
            temperature: 0.2,
            max_tokens: 100,
        };

        const result = await model.generateContent(prompt, options);
        const response = result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error(error, 'Erro ao gerar texto');
    }
}