import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
 
  return (
    <View>
      <Text>Olá</Text>
      <Button 
      title='Sobre o desenvolvedor'
      //Pode-se passar parametros de rota quando chamamos a função navigate. Nesse caso um objeto
      onPress={() => navigation.navigate('Sobre',{ name: "Antonio Pedreira", age: 21, role: "Programador"} )}/>
   </View>
  );
}

