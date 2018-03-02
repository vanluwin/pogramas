import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const btnVoltar = require('../../imgs/btn_voltar1.png');

export default class BarraNav extends Component {
  render() {

    if ( this.props.voltar ){
        return (
            <View style={[styles.barraT, {backgroundColor: this.props.color}]} >
                <TouchableHighlight
                    underlayColor={this.props.color}
                    activeOpacity={0.3}
                    onPress={() => {
                      this.props.navigator.pop();  
                    }}
                >
                    <Image source={ btnVoltar } />
                </TouchableHighlight>

                <Text style={ styles.titulo }>ATM Consultoria</Text> 
            </View>    
        );
    }

    return (
        <View style={[styles.barraT, {backgroundColor: this.props.color}]} >
            <Text style={styles.titulo}>ATM Consultoria</Text> 
        </View>    
    );
  }
}

const styles = StyleSheet.create({
    barraT: {
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: '#38393d',
        fontWeight: 'bold',
    }
});

