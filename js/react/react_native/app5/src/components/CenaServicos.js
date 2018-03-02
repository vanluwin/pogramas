import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNav from './BarraNav';

const detalhe = require('../../imgs/detalhe_servico.png');

export default class CenaCont extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
          // hidden 
          backgroundColor = '#19D1C8'
        />

        <BarraNav voltar navigator={this.props.navigator} color='#19D1C8'/>

        <View style={styles.header}>
          <Image source={detalhe} />
          <Text style={styles.txtH}>Nossos Serviços</Text>
        </View>

        <View style={styles.servicos}>
            <Text style={styles.txtS}> * Consultoria</Text>
            <Text style={styles.txtS}> * Processos </Text>
            <Text style={styles.txtS}> * Acompanhamento de </Text>
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
    color: '#19D1C8',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 23
  },
  servicos:{
    marginTop: 20,
    padding: 20
  },
  txtS: {
    fontSize: 20
  }
});


