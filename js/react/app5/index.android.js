import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaP from './src/components/CenaPrincipal'
import CenaC from './src/components/CenaClientes';
import CenaCont from './src/components/CenaContatos';
import CenaE from './src/components/CenaEmpresa';
import CenaS from './src/components/CenaServicos';

export default class app5 extends Component {
  render() {
    return (
      <Navigator 

        initialRoute={{ id: 'a' }}

        renderScene={(route, navigator) => {
            switch (route.id){

              case 'a':
                return(<CenaP navigator={ navigator } />);
                break;
              
              case 'b':
                return(<CenaC navigator={navigator} />);
                break;
              
              case 'c':
                return(<CenaCont navigator={navigator} />);
                break;
              
              case 'd':
                return(<CenaE navigator={navigator} />);
                break;
              
              case 'e':
                return( <CenaS navigator={navigator} /> );
                break;
            }
          }
        }

      />

    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
