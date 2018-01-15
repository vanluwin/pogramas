import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';
  
const  gerarNumero = () =>{
    alert( Math.floor( Math.random()*100 ) );
  },
  App = () => {
    return ( 
      <View> 
        <Text> Meu primeiro APP </Text>
        <Button title="Gerar um número randômico" onPress={gerarNumero}/>
      </View>
    );
  };

AppRegistry.registerComponent('app1', () => App);