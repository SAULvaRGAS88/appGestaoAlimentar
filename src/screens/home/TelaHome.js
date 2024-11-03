import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuHeader } from '../../components/menu/MenuHeader';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getHistoricoAlimentar } from '../../services/Servicosbanco';

export const TelaHome = () => {
    const navigate = useNavigation();
    const [retornoHistorico, setRetornoHistorico] = useState([]);

    const fetchAndLogHistoricoAlimentar = async () => {
        const historico = await getHistoricoAlimentar();
        setRetornoHistorico(historico);
    };

    // Use o useFocusEffect para recarregar os dados ao focar na tela
    useFocusEffect(
        useCallback(() => {
            fetchAndLogHistoricoAlimentar();
            // Limpa os dados quando sai da tela
            return () => setRetornoHistorico([]);
        }, [])
    );

    const renderHistoricoItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.alimento}>{item.alimento}</Text>
            <Text style={styles.calorias}>Calorias: {item.calorias}</Text>
            <Text style={styles.dataHora}>Data: {item.data} - Hora: {item.hora}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <MenuHeader />
            <FlatList
                data={retornoHistorico}
                renderItem={renderHistoricoItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    listContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    alimento: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 4,
    },
    calorias: {
        fontSize: 16,
        color: '#555555',
    },
    dataHora: {
        fontSize: 14,
        color: '#777777',
        marginTop: 4,
    },
});
