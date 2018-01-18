import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import CenaP from './src/components/CenaPrincipal'
import CenaC from './src/components/CenaClientes';

export default class app5 extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
            if(route.id === 'a') {
              return(<CenaP />);
            }else if(route.id === 'b') {
              return(<CenaC />);
            }
          }
        }
      />

    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
