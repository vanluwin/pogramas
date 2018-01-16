import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Icone extends Component {
    render(){
  
      if(this.props.escolha == 'pedra'){
        return(
          <View style={ styles.icone }>
            <Text style={ styles.txtJ }>{this.props.jogador}</Text>
            <Image source={ require('../../imgs/pedra.png') } />
          </View>
        );
      }else if(this.props.escolha == 'papel'){
        return(
          <View style={ styles.icone }>
            <Text style={ styles.txtJ }>{this.props.jogador}</Text>
            <Image source={ require('../../imgs/papel.png') } />
          </View>
        );
      }else if(this.props.escolha == 'tesoura'){
        return(
          <View style={ styles.icone }>
            <Text style={ styles.txtJ }>{this.props.jogador}</Text>
            <Image source={ require('../../imgs/tesoura.png') } />
          </View>
        );
      }else{
        return false;
      }
    }
}

const styles = StyleSheet.create({
    txtJ: {
        fontSize: 18
    },
    icone: {
        alignItems: 'center',
        marginBottom: 20
    }
});

export default Icone;