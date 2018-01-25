import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class OutrosJogos extends Component {
    render() {
        return(
            <Text style={styles.txt}>
                Outros Jogos da nossa empresa
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