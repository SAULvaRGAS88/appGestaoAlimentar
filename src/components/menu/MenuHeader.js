import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ModalMenuHeader } from './ModalMenuHeader';

export const MenuHeader = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const abrirModal = () => {
        setModalVisible(true);
    };

    const fecharModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={abrirModal} style={styles.btnMenu}>
                <Ionicons name="menu-outline" size={25} color="white" />
            </TouchableOpacity>

            <Text style={styles.title}>Menu</Text>

            <ModalMenuHeader visible={modalVisible} onClose={fecharModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: '#007BFF',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginLeft: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnMenu: {
        marginLeft: 20,
    },
});
