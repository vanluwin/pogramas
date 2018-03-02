import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItens from './src/components/listaItens';

export default class app4 extends Component {
  render() {
    return (
      <ListaItens></ListaItens>      
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
