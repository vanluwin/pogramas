import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

// Criar e exportar o compoente
export default class Texto extends Component {
  render() {
    return (
      <View>
        <Text style={ Estilos.estiloTexto } >Frases do dia</Text>
      </View>
    )
  }
};

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#1B9CF2',
    padding: 50
  }
};



