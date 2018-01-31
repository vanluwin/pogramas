import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default (props) => (
    <View>
        <TextInput 
            style={styles.input}
            placeholder='Resultado' 
            editable={false}
            value={props.resultado}
        />
    </View>
); 

const styles = StyleSheet.create({
    input: {
        height: 100,
        fontSize: 30
    }
});