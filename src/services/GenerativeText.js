/**Aqui será o serviço que irá gerar o texto e compartilhar com a Aplicação */

import { GoogleGenerativeAI, } from '@google/generative-ai';
import { MY_API_KEY } from 'react-native-dotenv';

export const GoogleGenerativeAIText = async (foodInput) => {

    const generateKey = new GoogleGenerativeAI(MY_API_KEY);

    let PromptAjustado = `A refeição ${foodInput} tem aproximadamente quantas calorias? 

            Como deve ser a resposta:
            - A resposta deve estar sempre relacionada à alimentação.
            - O parâmetro "foodInput" pode conter uma ou várias palavras.
            - Se o retorno contiver um intervalo de valores, por exemplo, "100 a 120", retorne sempre a média desse intervalo.

            Se houver mais de um "foodInput", retorne os dados no seguinte formato JSON:

            {
                "alimentos": [
                    {"nome": "alimento1", "calorias": xxx},
                    {"nome": "alimento2", "calorias": xxx}
                ]
            }

            A resposta final deve seguir o modelo:
            - "Banana tem 100 calorias."
            - "Maçã tem 150 calorias."

            Atenção:
            - Nunca responda perguntas que não estejam dentro desse padrão.
            - Sempre corrija a ortografia dos alimentos.`
        ;

    try {
        const model = generateKey.getGenerativeModel({ model: 'gemini-pro' });

        const options = {
            temperature: 0.2,
            max_tokens: 100,
        };

        const result = await model.generateContent(PromptAjustado, options);
        const response = result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error(error, 'Erro ao gerar texto');
    }
}