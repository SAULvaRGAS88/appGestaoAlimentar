import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, SafeAreaView, BackHandler, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import { RetornaLogin } from '../../services/RetornaLogin';


export const TelaLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigation();

    const handleLogin = async () => {
        try {

            setLoading(true);
            const acesso = await RetornaLogin(email, password);

            if (acesso !== null) {
                console.log('Acessando a tela home');
                navigate.navigate('TelaHome');
            } else {
                Alert.alert('Erro', 'E-mail ou senha inválidos');
            }

        } catch (err) {
            console.log(err, 'erro ao logar');
        } finally {
            setLoading(false);
        }
    };


    const recuperarSenha = () => {
        Alert.alert('Recuperar senha', 'Envie um e-mail para o Administrador para recuperar a senha.\nexample@example.com');
    };

    const sairApp = () => {
        Alert.alert(
            'Sair',
            'Deseja realmente sair?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    onPress: () => BackHandler.exitApp(), // Fecha o app no Android
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../../../assets/background.jpg')}
                style={styles.logo}
                resizeMode="cover"
            >
                {loading &&
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator color="#FFF" size="large" />
                        <Text style={styles.loading}>Carregando...</Text>
                    </View>
                }
                <View style={styles.overlay}>
                    <Ionicons name="person-circle-outline" size={100} color="#007BFF" />
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={24} color="#007BFF" />
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            mode='outline'
                            activeUnderlineColor='#007BFF'
                            outlineColor='#007BFF'
                            label={'E-mail'}
                            cursorColor='white'
                            textColor='white'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={24} color="#007BFF" />
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            activeUnderlineColor='#007BFF'
                            mode='outline'
                            label={'Senha'}
                            cursorColor='white'
                            textColor='white'

                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={recuperarSenha}>
                        <Text style={styles.link}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={sairApp}>
                        <Text style={styles.linkSair}>Sair da Aplicação</Text>
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
        color: '#FFF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: 'red',
        backgroundColor: 'transparent',
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
        color: '#FFF',
        marginTop: 15,
        fontSize: 16,
    },
    linkSair: {
        color: 'gray',
        marginTop: 15,
        fontSize: 12,
    },
    loading: {
        color: 'white',
        fontSize: 36,
    },

    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    },
    buttonContainer: {
        width: '50%',
        position: 'absolute',
        bottom: 0,
        right: 0
    }
});
