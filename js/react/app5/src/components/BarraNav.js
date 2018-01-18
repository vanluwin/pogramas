import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BarraNav extends Component {
  render() {
    return (
        <View style={styles.barraT}>
            <Text style={styles.titulo}>ATM Consultoria</Text> 
        </View>    
    );
  }
}

const styles = StyleSheet.create({
    barraT: {
        backgroundColor: '#9fa2a8',
        padding: 15,
        height: 60
    },
    titulo: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: '#38393d',
        fontWeight: 'bold',
    }
});

