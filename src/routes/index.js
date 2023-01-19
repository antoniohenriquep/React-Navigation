import React from 'react';
import About from '../Pages/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoutes from './stackRoutes';
import DrawerRoutes from './drawerRoutes';

const Tab = createBottomTabNavigator()

/* 
  Os componentes de tipos de navegação devem estar dentro do NavigationContainer. Seguindo a seguinte estrutura: NavigationContainer > Xnavigator.Navigator > Xnavigator.Screen
  Tipos de navegação:
  - Stack navigator: Como o nome já diz, navegação em pilha. Geralmente a função de navegar é chamada por um botão na página
  - Tab navigator: Rodapé que contém os botões de navegação. Como o Instagram, por exemplo.
  - Drawer: Navegação em gaveta, que sai das laterais da página
*/

export default function Routes() {
 return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen
        name = "Home"
        component={DrawerRoutes}/>
        
        <Tab.Screen
        name = "About"
        component={About}/>
    </Tab.Navigator>
  );
}

