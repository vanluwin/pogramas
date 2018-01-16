import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone'

const styles = StyleSheet.create({
  btn: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10
  },
  palco: {
    alignItems: 'center'
  },
  txtR: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaU: '',
      escolhaC: '',
      resultado: ''
    }
  } 

  jokenpo(escolhaU) {
    //gerar um nuemro aleatorio (0, 1, 2)
    let escolhaC = '';
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        escolhaC = 'pedra';
        break;
      case 1:
        escolhaC = 'papel';
        break;
      case 2:
        escolhaC = 'tesoura';
        break;
    }

    let resultado = '';
    if (escolhaC == 'pedra') {
      if (escolhaU == 'pedra') {
        resultado = 'Empate';
      } else if (escolhaU == 'papel') {
        resultado = 'Você ganhou';
      } else {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaC == 'papel') {
      if (escolhaU == 'pedra') {
        resultado = 'Você perdeu';
      } else if (escolhaU == 'papel') {
        resultado = 'Empate';
      } else {
        resultado = 'Você ganhou';
      }
    }

    if (escolhaC == 'tesoura') {
      if (escolhaU == 'pedra') {
        resultado = 'Você ganhou';
      } else if (escolhaU == 'papel') {
        resultado = 'Você perdeu';
      } else {
        resultado = 'Empate';
      }
    }

    this.setState({
      escolhaU: escolhaU,
      escolhaC: escolhaC,
      resultado: resultado
    });
  }

  render() {
    return (
      <View>

        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btn}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
          </View>
          <View style={styles.btn}>
            <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
          </View>
          <View style={styles.btn}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtR}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaU} jogador='Você'></Icone>
          <Icone escolha={this.state.escolhaC} jogador='Computador'></Icone>

        </View>

      </View>
    );
  }

}


AppRegistry.registerComponent('app3', () => app3);
