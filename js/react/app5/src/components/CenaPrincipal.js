import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image
} from 'react-native';

import BarraNav from './BarraNav';

const logo = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServico = require('../../imgs/menu_servico.png');

export default class CenaP extends Component {
  render() {
    return (
        <View>
        <StatusBar 
            // hidden 
            backgroundColor = '#9fa2a8'
        />

        <BarraNav/>

        <View style={styles.logo}>
            <Image source={logo} />
        </View>  

        <View style={styles.menus}>

            <View style={styles.btns}>
                <Image style={styles.btn} source={menuCliente} />
                <Image style={styles.btn} source={menuContato} />
            </View>

            <View style={styles.btns}>
                <Image style={styles.btn} source={menuEmpresa} />
                <Image style={styles.btn} source={menuServico} />
            </View>
          
        </View>  
                
      </View>   
    );
  }
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: 30
    },
    menus: {
        alignItems: 'center'        
    },
    btns: {
        flexDirection: 'row'
    },
    btn: {
        marginHorizontal: 15,
        marginTop: 30
    }
});

