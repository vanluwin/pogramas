import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

export default (props) => (
    <View style={styles.entrada} >
        <Numero num={props.n1} attValor={props.attValor} nome='n1' />
        <Numero num={props.n2} attValor={props.attValor} nome='n2' />
    </View>
);

const styles = StyleSheet.create({
    entrada: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

