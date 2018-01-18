import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNav from './BarraNav';

const detalhe = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');

export default class CenaC extends Component {
  render() {
    return (
        <View>
        <StatusBar 
            // hidden 
            backgroundColor = '#9fa2a8'
        />

        <BarraNav/>

        <View style={styles.header}>
          <Image source={detalhe} />
          <Text style={styles.txtH}>Nossos Clientes</Text>
        </View>

        <View style={styles.clientes}>
          <Image source={cliente1} />
          <Text style={styles.txtC}>Nisi fugiat qui ad anim deserunt aliqua excepteur</Text>
        </View>

        <View style={styles.clientes}> 
          <Image source={cliente2} />
          <Text style={styles.txtC}>Nisi sint culpa cillum quis pariatur nisi cupidatat</Text>
        </View>     
                
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10
  },
  txtH: {
    color: '#b9c941',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 23
  },
  clientes: {
    padding: 20,
    marginTop: 15
  },
  txtC: {
    fontSize: 18,
    marginLeft: 20
  }
});


