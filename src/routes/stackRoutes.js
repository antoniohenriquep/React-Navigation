import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Contato from '../Pages/Contato';

const Stack = createNativeStackNavigator()

export default function StackRoutes()
{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Home"
            component={Home}/>
            <Stack.Screen
            name='Contato'
            component={Contato}/>
        </Stack.Navigator>
    )
}