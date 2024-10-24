import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from 'expo-sqlite';
import { TelaLogin } from './src/screens/login/TelaLogin';
import { TelaHome } from './src/screens/home/TelaHome';
import { Alimentacao } from './src/screens/alimentação/Alimentacao';
import { servicoBancodados } from './src/services/ServicoBancodados';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <SQLiteProvider databaseName='appGestaoAlimentar.db' onInit={servicoBancodados}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TelaLogin"
            component={TelaLogin}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="TelaHome"
            component={TelaHome}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen
            name="TelaAlimentacao"
            component={Alimentacao}
            options={{ title: '', headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  );
}
