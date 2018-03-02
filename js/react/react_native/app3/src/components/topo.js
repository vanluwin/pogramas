import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

class Topo extends Component {
    render(){
        return(
        <View>
            <Image style={{ width: 450}} source={require('../../imgs/jokenpo.png')} />
        </View>
        );
    }
}

export default Topo; 