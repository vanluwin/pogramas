import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

class firebaseTeste extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAuBbWCp3ThdA98cVp_VLThymHx8DUvQDo",
      authDomain: "react-c0d12.firebaseapp.com",
      databaseURL: "https://react-c0d12.firebaseio.com",
      projectId: "react-c0d12",
      storageBucket: "react-c0d12.appspot.com",
      messagingSenderId: "554653108001"
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    const ref = firebase.database().ref('funcionarios');

    ref.set({nome: 'richard'});
  }

  listarDados() {
    const ref = firebase.database().ref('pontuacao');

    ref.on('value', (snapshot) => {
      alert( snapshot.val() );
    });
  }

  cadastrarUsuario() {
    const email = 'teste@gmail.com', senha = 'teste123';

    firebase.auth().createUserWithEmailAndPassword(
      email, 
      senha
    ).catch( (err) => {
      alert(err.message); 
    });
  }

  verificarUsuarioLogado() {
    /*
    const user = firebase.auth().currentUser;
    
    if (user){
      alert('Usuario está logado');
    }else {
      alert('Usuario não está logado');
    }
    */

    firebase.auth().onAuthStateChanged( (user) => {
      if (user){
        alert('Usuario está logado');
      }else {
        alert('Usuario não está logado');
      }
    });
  }

  login() {
    const email = 'teste@gmail.com', senha = 'teste123';

    firebase.auth().signInWithEmailAndPassword(
      email,
      senha
    ).catch( (err) => {
      alert(err.message);
    }).then( () => {
      //alert('Usuário logado com sucesso!');
    });
  }

  logout() {
    firebase.auth().signOut().then( () => { /* alert('Usuario deslogado!');*/ } );
  }

  render() {
    return (
      <View>
        <Button
          onPress={ () => { this.cadastrarUsuario(); } }
          title='Cadastrar Usuario'
          color='#841584'
        />

        <Button
          onPress={ () => { this.verificarUsuarioLogado(); } }
          title='Verificar Usuario Logado'
          color='#841584'
        />

        <Button
          onPress={ () => { this.login(); } }
          title='Login'
          color='#841584'
        />

        <Button
          onPress={ () => { this.logout(); } }
          title='Logout'
          color='#841584'
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('firebaseTeste', () => firebaseTeste);
