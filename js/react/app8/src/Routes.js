import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/formLogin';
import FormCadastro from './components/formCadastro';

export default props => (
    <Router>
        <Scene key='root'>
            <Scene key='home' component={ FormLogin } hideNavBar initial />
            <Scene key='cadastro' component={ FormCadastro } title='Cadastro' />
        </Scene>
    </Router>
);