export const TratamentoText = async (text) => {
    // Tenta analisar a resposta como JSON
    let alimentos = [];
    let calorias = 'Calorias não encontradas';
    
    try {
        const resposta = JSON.parse(text);

        // Verifica se a resposta contém o campo "alimentos"
        if (resposta.alimentos && Array.isArray(resposta.alimentos)) {
            alimentos = resposta.alimentos.map(item => ({
                nome: item.nome,
                calorias: item.calorias
            }));
            calorias = alimentos.map(item => item.calorias).reduce((a, b) => a + b, 0);
        }
    } catch (err) {
        console.error('Erro ao processar a resposta:', err);
        return { alimento: 'Alimento não encontrado', calorias, data: '', hora: '' };
    }

    // Se não encontrou alimentos, utilize uma mensagem padrão
    if (alimentos.length === 0) {
        return { alimento: 'Alimento não encontrado', calorias, data: '', hora: '' };
    }

    // Pega a data e a hora
    let dataNow = new Date();
    
    // Trata dataNow = ddmmyyyy (string) e horaNow = hhmm (string) para o formato correto
    let data = dataNow.getDate().toString().padStart(2, '0') +
        (dataNow.getMonth() + 1).toString().padStart(2, '0') +
        dataNow.getFullYear().toString();

    let hora = dataNow.getHours().toString().padStart(2, '0') +
        dataNow.getMinutes().toString().padStart(2, '0');

    // console.log('Alimentos:', alimentos);
    // console.log('Calorias:', calorias);
    // console.log('Data:', data);
    // console.log('Hora:', hora);

    return { alimentos, calorias, data, hora };
};
