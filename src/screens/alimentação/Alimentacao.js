import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuHeader } from '../../components/menu/MenuHeader';
import { ArrayTextoEsperaIA } from '../../services/ArrayTextoEsperaIA';
import { TratamentoText } from './TratamentoText';
import { GoogleGenerativeAIText } from '../../services/GenerativeText';

export const Alimentacao = () => {
    const [foodInput, setFoodInput] = useState('');
    const [calories, setCalories] = useState(null);
    const [loading, setLoading] = useState(false);
    const [randomMessage, setRandomMessage] = useState('');

    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * ArrayTextoEsperaIA.length);
        setRandomMessage(ArrayTextoEsperaIA[randomIndex].texto);
    };

    let stringAjustada = `A refeição ${foodInput} tem aproximadamnte quantas calorias? `

    const handleCalculateCalories = async () => {
        try {
            if (!foodInput.trim()) {
                if (Platform.OS !== 'web') {
                    Alert.alert('Atenção', 'Por favor, descreva o que você comeu.');
                    return;
                } else {
                    alert('Por favor, descreva o que você comeu.');
                    return;
                }

            }
            setLoading(true);
            const resp = await GoogleGenerativeAIText(stringAjustada);
            setCalories(resp);
            TratamentoText(resp, foodInput);
            setLoading(false);
        } catch (err) {
            console.log('Erro calculando calorias', err);
        }
    };

    const addHistory = () => {
        Alert.alert('Sucesso', 'Refeição adicionada ao seu historico com sucesso!');
    }

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
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.resultText}>{calories}</Text>
                        </ScrollView>
                    </View>
                )}

            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={addHistory} >
                    <Text style={styles.buttonText}>Adicionar ao Historico</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
    content: {
        padding: 20,
        flex: 1
    },
    scrollView: {
        // flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#F1F1F1',
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        textAlignVertical: 'top',
        height: 100,
        marginBottom: 20,
        elevation: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.9,
        shadowRadius: 0,
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
        flex: 1
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
    },
    footer: {
        padding: 10,
        right: 0,
        position: 'absolute',
        bottom: 0,
    }
});

