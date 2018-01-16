import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import nostra from 'nostra';

//Formatações
const Estilos = {
  principal:{
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center'
  }, 
  botao: {
    backgroundColor: '#69D2E7',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderRadius: 10
  }, 
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
  
};

const click = () => {
  Alert.alert(
    'Fortune', 
    nostra.generate()
  );
};

// Criar e exportar o compoente
class Texto extends Component {
  render() {
    const { principal, botao, textoBotao} = Estilos;
    return (
      <View style={ principal }>
        <Image source={ require('./imgs/logo.png') } style={{width: 300, height: 250}} />
        <TouchableOpacity style={ botao } onPress={click}>
          <Text style={ textoBotao }>Fortune</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Texto;
