import React from 'react';
import styles from './Estilos/Estilos';
import Guardados from './Componentes/Guardados';
import {Text, View, Button, TouchableOpacity, redux } from 'react-native';


export default class Cargados extends React.Component {
    constructor(props) {
        super(props);
    } 
    cargarGuardados() {
        var aux = this.props.lista;
        if (aux.length !== 0) {
            return aux.map((value, index) =>
                <Guardados CargarNumeros={this.props.CargarNumeros.bind(this, value.numeros)} key={index} lista={value.numeros} date={value.date}/>
            );
        }
        return (
            <Text style={styles.texto}>No hay elementos cargados</Text>
            );

    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Total</Text>
                {this.cargarGuardados()}
                <View style={styles.botonAgregarView}>
                    <Button title="Eliminar todo" style={styles.botonAgregar} color="#b23200" onPress={this.props.eliminarTodo} />
                    <Button title="Agregar" style={styles.botonAgregar} onPress={this.props.function} />
                </View>
            </View>
            );
    }
}