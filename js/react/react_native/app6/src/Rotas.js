import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }} >
        <Scene key='root'>
            <Scene key='main' component={Main} initial title='Cara ou Coroa' />
            <Scene key='about' component={SobreJogo} title='Sobre o jogo'/>
            <Scene key='more' component={OutrosJogos} title='Outros Jogos' />
            <Scene key='play' component={ Resultado } title='Resultado' />
        </Scene>
    </Router>
);

export default Rotas;