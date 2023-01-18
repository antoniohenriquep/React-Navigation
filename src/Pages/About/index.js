import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
  
//Pegando as informações de rota como parametro da função
export default function About({route}) {

  /*
  Se utilizar o hook useRoute da seguinte forma:
  const route = useRoute()
  Tornas-se desnecessário receber as rotas por parametro na função
  */

  const navigation = useNavigation()

  //Mesma função do useEffect, porém de maneira sincrona
  useLayoutEffect(() =>{
    navigation.setOptions({
      title: route.params?.name === '' ? "Sobre" : "Sobre "+ route.params?.name
    })

  },[navigation])
 return (
  <View style={styles.container}>
    <Text>{route.params?.name},{route.params?.age}</Text>
    <Text>{route.params?.role}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});