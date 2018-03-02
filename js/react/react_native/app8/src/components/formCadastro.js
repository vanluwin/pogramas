import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario( { nome, email, senha }  );
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }} >

                        <TextInput 
                            value={this.props.nome} 
                            placeholder='Nome'    
                            style={{ fontSize: 20, height: 45 }}  
                            onChangeText={ texto => this.props.modificaNome(texto) } 
                            placeholderTextColor='#fff' 
                        />

                        <TextInput 
                            value={this.props.email} 
                            placeholder='E-mail' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={ texto => this.props.modificaEmail(texto) } 
                            placeholderTextColor='#fff' 
                        />

                        <TextInput 
                            value={this.props.senha} 
                            placeholder='Senha'  
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={ texto => this.props.modificaSenha(texto) } 
                            secureTextEntry 
                            placeholderTextColor='#fff' 
                        />
                    </View>
        
                    <View style={{ flex: 1 }} >
                        <Button 
                            title='Cadastrar' 
                            color='#115E54' 
                            onPress={() => this._cadastraUsuario() } 
                        />
                    </View>
                </View>
            </Image>
        );
    }
}

const mapStateToProps = state => ({
    nome:  state.Autenticacao.nome,
    email: state.Autenticacao.email,
    senha: state.Autenticacao.senha
});

export default connect(
    mapStateToProps, 
    { 
        modificaEmail, 
        modificaSenha, 
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);