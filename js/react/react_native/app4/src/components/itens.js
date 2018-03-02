import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

class Itens extends Component {
  render() {
    return (
      <View style={styles.item}>

        <View style={styles.foto}>
          <Image style={ {height:100, width:100} } source={ {uri: this.props.item.foto} } />
        </View>

        <View style={styles.detalhes}>
          <Text style={styles.txtT}>{this.props.item.titulo}</Text>  
          <Text style={styles.txtV}>R${this.props.item.valor}</Text>  
          <Text style={styles.txt}>Local: {this.props.item.local_anuncio}</Text> 
          <Text style={styles.txt}>Data da publicação: {this.props.item.data_publicacao}</Text> 
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  foto: {
    height: 102,
    width: 102
  },
  detalhes: {
    marginLeft: 20,
    flex: 1
  },
  txtT: {
    fontSize: 20,
    color: '#FA6900',
    marginBottom: 5
  },
  txtV: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  txt: {
    fontSize: 16
  }
});

export default Itens;