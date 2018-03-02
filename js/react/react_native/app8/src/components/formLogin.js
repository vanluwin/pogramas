import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = props => (
    <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
            </View>

            <View style={{ flex: 2 }} >
                <TextInput value={props.email} placeholder='E-mail' style={{ fontSize: 20, height: 45 }} onChangeText={ texto => props.modificaEmail(texto) } placeholderTextColor='#fff' />
                <TextInput value={props.senha} placeholder='Senha'  style={{ fontSize: 20, height: 45 }} onChangeText={ texto => props.modificaSenha(texto) } secureTextEntry placeholderTextColor='#fff' />
                <TouchableHighlight onPress={() =>{ Actions.cadastro(); }} >
                    <Text style={{ fontSize: 20, marginVertical: 15, color: '#fff' }} >Ainda não tem cadastro? cadastre-se!</Text>
                </TouchableHighlight>
            </View>

            <View style={{ flex: 2 }} >
                <Button title='Acessar' color='#115E54' onPress={() => false} />
            </View>
        </View>
    </Image>
);

const mapStateToProps = state => ({
    email: state.Autenticacao.email,
    senha: state.Autenticacao.senha
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
