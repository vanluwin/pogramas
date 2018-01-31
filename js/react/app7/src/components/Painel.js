import React from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (

    <View>
        <Entrada 
            attValor={props.attValor} 
            n1={props.n1} 
            n2={props.n2}
        />

        <Operacao operacao={props.operacao} attOp={props.attOp} />
        <Comando acao={props.calcular} />
    </View>
    
);

export { Painel };