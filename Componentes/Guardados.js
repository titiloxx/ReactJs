import React from 'react';
import styles from '../Estilos/Estilos';
import { Text, View, Button,TouchableOpacity } from 'react-native';
export default class Numero extends React.Component {
    
    sumar(valorAnterior, valorActual, indice, vector) {
        return valorAnterior + valorActual;
    }//Suma los valores del array

    render() {
        return (
            <View style={styles.guardados_content}>
                <TouchableOpacity onPress={this.props.CargarNumeros}>  
                <Text>{this.props.date}</Text>
                <View style={[styles.agregarBordes]}>
                    <Text style={styles.title}>{this.props.lista.reduce(this.sumar)}</Text>
                </View>
                </TouchableOpacity> 
            </View>
            );
    }



}