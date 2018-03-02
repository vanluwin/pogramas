import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableHighlight
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

        <BarraNav color='#9fa2a8'/>

        <View style={styles.logo}>
            <Image source={logo} />
        </View>  

        <View style={styles.menus}>

            <View style={styles.btns}>
                <TouchableHighlight
                    underlayColor={'#B9C941'}
                    activeOpacity={0.3}
                    onPress={() => {
                     this.props.navigator.push({ id: 'b' });   
                    }}
                >
                    <Image style={styles.btn} source={menuCliente} />
                </TouchableHighlight>
                
                <TouchableHighlight
                    underlayColor={'#61BD8C'}
                    activeOpacity={0.3}
                    onPress={() => {
                     this.props.navigator.push({ id: 'c' });   
                    }}
                >
                    <Image style={styles.btn} source={menuContato} />
                </TouchableHighlight>
            </View>

            <View style={styles.btns}>
                <TouchableHighlight
                    underlayColor={'#EC7148'}
                    activeOpacity={0.3}
                    onPress={() => {
                     this.props.navigator.push({ id: 'd' });   
                    }}
                >
                    <Image style={styles.btn} source={menuEmpresa} />
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={'#19D1C8'}
                    activeOpacity={0.3}
                    onPress={() => {
                     this.props.navigator.push({ id: 'e' });   
                    }}
                >
                    <Image style={styles.btn} source={menuServico} />
                </TouchableHighlight>
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

