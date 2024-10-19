import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MenuHeader } from '../../components/menu/MenuHeader'
import { useNavigation } from '@react-navigation/native'

export const TelaHome = () => {

    const navigate = useNavigation();

   


    return (
        <SafeAreaView style={styles.container}>
            <MenuHeader />
            <View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAlimentacao: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})