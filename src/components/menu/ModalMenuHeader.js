import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ModalMenuHeader = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}> Menu</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.buttonText}>Fechar Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        right: 10,
        bottom: 10,
        position: 'absolute',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
