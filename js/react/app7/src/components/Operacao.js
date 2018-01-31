import React, { Component } from 'react';
import { StyleSheet, Picker } from 'react-native';

export default class Operacao extends Component {

    render() {
        return(
            <Picker 
                style={styles.picker} 
                selectedValue={this.props.operacao} 
                onValueChange={ op => { this.props.attOp(op) } } 
            >
                <Picker.Item label='Soma' value='soma'/>
                <Picker.Item label='Subtração' value='subtracao'/>
                <Picker.Item label='Multiplicação' value='multiplicacao'/>
                <Picker.Item label='Divisão' value='divisao'/>
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    picker: {
        marginVertical: 15
    }
});

