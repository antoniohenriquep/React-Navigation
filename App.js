import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import About from './src/Pages/About';

const Stack = createNativeStackNavigator()

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

