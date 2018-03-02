import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components/';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { n1: '', n2: '', operacao: 'soma', resultado: '' };

    this.calcular = this.calcular.bind(this);
    this.attValor = this.attValor.bind(this);
    this.attOp = this.attOp.bind(this);
  }

  calcular() {
    const n1 = parseFloat(this.state.n1), n2 = parseFloat(this.state.n2);
    let resultado = 0;

    switch(this.state.operacao) {
        case 'soma':
            resultado = n1 + n2;
            break;
        
        case 'subtracao':
            resultado = n1 - n2;
            break;

        case 'multiplicacao':
            resultado = n1 * n2;
            break;

        case 'divisao':
            resultado = n1 / n2;
            break;
        
        default:
            resultado = 0;
            break;
    }
    
    this.setState({ resultado: resultado.toString() });
      
  }

  attValor(campo, conteudo) {
      const obj = {};
      obj[campo] = conteudo;
      this.setState(obj);
  } 

  attOp(operacao) {
      this.setState({ operacao });
  }

  render() {
    return(
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel 
          num1={this.state.n1}
          num2={this.state.n2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          attValor={this.attValor}
          attOp={this.attOp}
        />
      </View>
    );
    
  }
}


