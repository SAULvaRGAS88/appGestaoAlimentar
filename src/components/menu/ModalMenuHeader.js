import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

export const ModalMenuHeader = ({ visible, onClose }) => {

    const navigate = useNavigation();
    const route = useRoute();

    const handleHome = () => {
        if (route.name !== 'TelaHome') {
            navigate.navigate('TelaHome');
        }
        onClose();
    };

    const handleAlimentacao = () => {
        if (route.name !== 'TelaAlimentacao') {
            navigate.navigate('TelaAlimentacao');
        }
        onClose();
    };
    const handleHidratacao = () => {
        if (route.name !== 'TelaAlimentacao') {
            // navigate.navigate('TelaAlimentacao');
            Alert.alert('Hidratação', 'Em desenvolvimento',)
        }
        // onClose();
    };

    const handleAtivadadeFisica = () => {
        if (route.name !== 'TelaAlimentacao') {
            // navigate.navigate('TelaAlimentacao');
            Alert.alert('Atividade Física', 'Em desenvolvimento',)
        }
        // onClose();
    };

    const handleConfig = () => {
        if (route.name !== 'TelaAlimentacao') {
            // navigate.navigate('TelaAlimentacao');
            Alert.alert('Tela de Configuracoes', 'Em desenvolvimento',)
        }
        // onClose();
    };

    const handleSair = () => {
        navigate.navigate('TelaLogin');
        onClose();
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalView}>

                            <View style={styles.header}>
                                <Ionicons name="nutrition-outline" size={35} color="#FFF" />
                                <Text style={styles.title}>Menu</Text>
                            </View>

                            <View style={styles.containerMenu}>
                                <TouchableOpacity style={styles.btnMenu} onPress={handleHome}>
                                    <Ionicons name="arrow-forward-sharp" size={25} color="#007BFF" />
                                    <Text style={styles.buttonTextMenu}>Home</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnMenu} onPress={handleAlimentacao}>
                                    <Ionicons name="arrow-forward-sharp" size={25} color="#007BFF" />
                                    <Text style={styles.buttonTextMenu}>Alimentação</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnMenu} onPress={handleHidratacao}>
                                    <Ionicons name="arrow-forward-sharp" size={25} color="#007BFF" />
                                    <Text style={styles.buttonTextMenu}>Hidratação</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnMenu} onPress={handleAtivadadeFisica}>
                                    <Ionicons name="arrow-forward-sharp" size={25} color="#007BFF" />
                                    <Text style={styles.buttonTextMenu}>Atividade Física</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnMenu} onPress={handleConfig}>
                                    <Ionicons name="arrow-forward-sharp" size={25} color="#007BFF" />
                                    <Text style={styles.buttonTextMenu}>Configurações</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnMenu} onPress={handleSair}>
                                    <Ionicons name="arrow-forward-sharp" size={25} color="#007BFF" />
                                    <Text style={styles.buttonTextMenu}>Sair</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Ionicons name="exit-outline" size={25} color="#007BFF" />
                                <Text style={styles.buttonText}>Fechar Menu</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-start',
    },
    modalView: {
        width: '60%',
        height: '100%',
        backgroundColor: '#007BFF',
        padding: 20,
        position: 'absolute',
        left: 0,
        top: 0,
        elevation: 5,
    },
    modalText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        right: 10,
        bottom: 10,
        position: 'absolute',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonText: {
        color: '#007BFF',
        fontSize: 18,
    },
    btnMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        elevation: 9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonTextMenu: {
        color: '#007BFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerMenu: {
        flexDirection: 'column',
        gap: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 50,
    },
    title: {
        color: 'white',
        fontSize: 35,
        marginLeft: 20,
        fontWeight: '200',
    },
});
