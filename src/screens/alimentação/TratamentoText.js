export const TratamentoText = (text, foodInput) => {
    console.log('text recebido', text);
    console.log('foodInput', foodInput);

    // Expressão regular para capturar calorias com possível intervalo (ex: "120-150")
    const caloriasRegex = /(\d+)\s*(-\s*\d+)?/;

    // Tentativa de extrair as calorias
    const caloriasMatch = text.match(caloriasRegex);
    let calorias = caloriasMatch ? caloriasMatch[0].replace(/\s/g, '') : 'Calorias não encontradas';

    // O alimento é diretamente o foodInput, já que não é extraído da frase calorias
    let alimento = foodInput || 'Alimento não encontrado';

    // Log dos resultados
    console.log('Calorias:', calorias);
    console.log('Alimento:', alimento);

    return { calorias, alimento };
}
