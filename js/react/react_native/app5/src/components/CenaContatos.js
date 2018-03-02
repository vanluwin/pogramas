import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNav from './BarraNav';

const detalheContatos = require('../../imgs/detalhe_contato.png');

export default class CenaCont extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
          // hidden 
          backgroundColor = '#61BD8C'
        />

        <BarraNav voltar navigator={this.props.navigator} color='#61BD8C' />

        <View style={styles.header}>
          <Image source={detalheContatos} />
          <Text style={styles.txtH}>Contatos</Text>
        </View>

        <View style={styles.contatos}>
            <Text style={styles.txtC}> TEL: (11) 123-123 </Text>
            <Text style={styles.txtC}> CEL: (11) 91234-1234 </Text>
            <Text style={styles.txtC}> EMAIL: contato@atmconsultoria.com </Text>
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
    color: '#61bd8c',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 23
  },
  detalheContatos:{
    marginTop: 20,
    padding: 20
  },
  txtC: {
      fontSize: 20
  }
});


