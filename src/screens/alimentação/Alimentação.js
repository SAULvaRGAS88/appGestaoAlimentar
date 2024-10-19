import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuHeader } from '../../components/menu/MenuHeader';
import { GoogleGenerativeAI, } from '@google/generative-ai';
import { MY_API_KEY } from 'react-native-dotenv';
import { ArrayTextoEsperaIA } from '../../services/ArrayTextoEsperaIA';
import { TratamentoText } from './TratamentoText';

export const Alimentação = () => {
    const [foodInput, setFoodInput] = useState('');
    const [calories, setCalories] = useState(null);
    const [loading, setLoading] = useState(false);
    const [randomMessage, setRandomMessage] = useState('');

    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * ArrayTextoEsperaIA.length);
        setRandomMessage(ArrayTextoEsperaIA[randomIndex].texto);
    };

    const generateKey = new GoogleGenerativeAI(MY_API_KEY);

    let stringAjustada = `A refeição ${foodInput} tem aproximadamnte quantas calorias? `

    const handleCalculateCalories = async () => {
        if (!foodInput.trim()) {
            Alert.alert('Atenção', 'Por favor, descreva o que você comeu.');
            return;
        }

        setLoading(true);

        try {
            const model = generateKey.getGenerativeModel({ model: 'gemini-pro' });
            const prompt = stringAjustada;

            const options = {
                temperature: 0.2,
                max_tokens: 100,
            };

            const result = await model.generateContent(prompt, options);
            const response = await result.response;
            const text = await response.text();
            setCalories(text);
            TratamentoText(text, foodInput);
        } catch (error) {
            console.error(error, 'Erro ao gerar texto');
        }

        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <MenuHeader />
            <View style={styles.content}>
                <Text style={styles.title}>O que você comeu?</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua refeição..."
                    value={foodInput}
                    onChangeText={setFoodInput}
                    multiline={true}
                />

                <TouchableOpacity style={styles.button} onPress={() => {
                    getRandomMessage();
                    handleCalculateCalories();
                }}>
                    {loading ? (
                        <View style={styles.buttonPesq}>
                            <ActivityIndicator color="#FFF" />
                            <Text style={styles.buttonTextRandon}>{randomMessage}</Text>
                        </View>
                    ) : (
                        <Text style={styles.buttonText}>Calcular Calorias</Text>
                    )}
                </TouchableOpacity>

                {calories && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>{calories}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        textAlignVertical: 'top',
        height: 100,
        marginBottom: 20,
        elevation: 3,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
    resultContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 3,
    },
    resultText: {
        fontSize: 18,
        color: '#333',
    },
    buttonPesq: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonTextRandon: {
        color: '#FFF',
        fontSize: 18,
    }
});

