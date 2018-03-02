import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnMore = require('../imgs/sobre_jogo.png');
const btnOutros = require('../imgs/outros_jogos.png');

export default class Main extends Component {
  render() {
    return (
        <View style={styles.main}>
          
          <View style={styles.apresentacao}>
            <Image source={ logo } />

            <TouchableHighlight 
                onPress={() => {
                    Actions.play();
                }}
            >
                <Image source={ btnJogar } />
            </TouchableHighlight>
          </View>

          <View style={styles.rodape}>
            <TouchableHighlight 
                onPress={() => {
                    Actions.about();
                }}
            >
                <Image source={ btnMore } />
            </TouchableHighlight>
            
            <TouchableHighlight
                onPress={() => {
                    Actions.more();
                }}
            >
                <Image source={ btnOutros } />
            </TouchableHighlight>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#61BD8C'  
  },
  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  }
});
