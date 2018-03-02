import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './itens';

class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaItens: []
    }
  }

  componentWillMount() {
    //Requisição http
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then( res => { this.setState({ listaItens: res.data }); } )
      .catch( err => { console.log(err); });

  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        { this.state.listaItens.map( item => ( <Itens key={item.titulo} item={item} /> ) ) } 
      </ScrollView>   
    );
  }

}

export default ListaItens;