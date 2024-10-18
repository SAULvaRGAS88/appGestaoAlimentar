import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const TelaLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigation();

    const handleLogin = () => {
        //deixar fixo por enqunato email: saul senha : 123
        if (email === 'saul' && password === '123') {
            //indo para home
            navigate.navigate('TelaHome');

        }
    };

    const recuperarSenha = () => {
        Alert.alert('Recuperar senha', 'Envie um e-mail para o Administrador para recuperar a senha.\nexample@example.com');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../../../assets/background.jpg')}
                style={styles.logo}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Ionicons name="person-circle-outline" size={100} color="#007BFF" />
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={24} color="#007BFF" />
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={24} color="#007BFF" />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={recuperarSenha}>
                        <Text style={styles.link}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 50,
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#007BFF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#007BFF',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: '#007BFF',
        marginTop: 15,
        fontSize: 16,
    },
});
