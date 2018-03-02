import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class SobreJogo extends Component {
    render() {
        return(
            <Text style={styles.txt}>
                Informações sobre o jogo
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        flex: 1,
        backgroundColor: '#61BD8C',
        fontSize: 30,
        color: '#fff',
        padding: 30
                
    }
});