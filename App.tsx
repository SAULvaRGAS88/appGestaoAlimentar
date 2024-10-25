import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaLogin } from './src/screens/login/TelaLogin';
import { TelaHome } from './src/screens/home/TelaHome';
import { Alimentacao } from './src/screens/alimentação/Alimentacao';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
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
  );
}
