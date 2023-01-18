import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import About from './src/Pages/About';

const Stack = createNativeStackNavigator()

/* 
  Os componentes de tipos de navegação devem estar dentro do NavigationContainer. Seguindo a seguinte estrutura: NavigationContainer > Xnavigator.Navigator > Xnavigator.Screen
  Tipos de navegação:
  - Stack navigator: Como o nome já diz, navegação em pilha. Geralmente a função de navegar é chamada por um botão na página
  - Tab navigator: Rodapé que contém os botões de navegação. Como o Instagram, por exemplo.
  - Drawer: Navegação em gaveta, que sai das laterais da página
*/

export default function App() {
 return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='Home'
      component={Home}
      options = {{
        headerShown: false
      }}/>

      <Stack.Screen 
      name = 'Sobre'
      component={About}/>

    </Stack.Navigator>
   </NavigationContainer>
  );
}

