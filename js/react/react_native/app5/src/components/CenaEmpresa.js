import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import BarraNav from './BarraNav';

const detalhe = require('../../imgs/detalhe_empresa.png');

export default class CenaE extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar 
          // hidden 
          backgroundColor = '#EC7148'
        />

        <BarraNav voltar navigator={this.props.navigator} color='#EC7148' />

        <View style={styles.header}>
          <Image source={detalhe} />
          <Text style={styles.txtH}>A Empresa</Text>
        </View>

        <View style={styles.clientes}>
            <Text style={styles.txtE}>
                Fugiat aliquip sunt exercitation aute irure dolore occaecat aute. 
                Voluptate reprehenderit aliquip nisi exercitation incididunt sint irure
                adipisicing non consectetur ullamco. Nulla velit id ea minim ullamco Lorem 
                elit laboris. Commodo elit ex pariatur occaecat irure culpa labore minim.
                Aute excepteur est dolore sit est aliquip pariatur veniam dolore. Ipsum 
                consectetur incididunt deserunt qui id et.
            </Text>
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
    color: '#EC7148',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 23
  },
  txtE: {
    fontSize: 20,
    marginLeft: 20,
    padding: 20
  }
});


