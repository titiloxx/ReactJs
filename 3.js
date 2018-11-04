import React from 'react';
import styles from './Estilos/Estilos';
import { Text, View, Button } from 'react-native';
import Numero from './Componentes/Numero';
import store from './store';//Redux

export default class Perro extends React.Component {
    constructor() {
        super();
        var aux = store.getState().numerosActual;
        this.state = {
            numeros: aux,
            date: date(new Date())
        };
        cambio = store.getState().cambio;
    }
    sumarNumero(index) {
        this.setState(previousState => {
            var aux = this.state.numeros;
            aux[index] = aux[index] + 1;
            return {
                numeros: aux
            };
        });
    }
    restarNumero(index) {
        this.setState(previousState => {
            var aux = this.state.numeros;
            aux[index] = aux[index] - 1;
            return {
                numeros: aux
            };
        });
    }
    agregarNumero() {
        var aux = this.state.numeros;
        if (aux.length !== 7) {
            aux.push(0);
            this.setState({
                numeros: aux
            });
        }
    }//Agrega un div Numero a la lista
    sacarNumero() {
        var aux = this.state.numeros;
        if (aux.length!==1) {
            aux.pop();
            this.setState({
                numeros: aux
            });
        }
      
    }//Agrega un div Numero a la lista
    sumar(valorAnterior, valorActual, indice, vector) {
            return valorAnterior + valorActual;
    }//Suma los valores del array
    recorrerNumeros() {
        return this.state.numeros.map((data,index) => {
            return (
                <Numero key={index} number={data} sumarNumero={this.sumarNumero.bind(this, index)} restarNumero={this.restarNumero.bind(this, index)} />
            );
        });
    }
    guardarStore() {
        store.dispatch({
            type: "BORRAR_NUMEROS"
        });
        if (!cambio) {
            store.dispatch({
                type: "CARGAR_LISTA",
                estadoActual: this.state
            });
        }
        this.props.navigation.navigate("MainScreen");
    }//Agrega lista de numeros al store de redux
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Nuevo Total</Text>
                <View style={styles.agregarCNumero}>
                    <View style={styles.agregarBordes}>
                        <Button style={styles.bottonNumero} title="         +         " color="#5bed31" onPress={this.agregarNumero.bind(this)} />
                    </View>
                    <View style={styles.agregarBordes}>
                        <Button style={styles.bottonNumero} title="         -         " color="#db4a31" onPress={this.sacarNumero.bind(this)}/>
                    </View>
                </View>
                {this.recorrerNumeros()}
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 15 }}>Total:</Text>
                    <View style={[styles.agregarBordes, { backgroundColor: '#57ECFE' }]}>
                        <Text style={[styles.title, { backgroundColor: '#57ECFE' }]}>{this.state.numeros.reduce(this.sumar)}</Text>
                    </View>
                </View>
                <View style={{ margin: 10, padding: 2 }}>
                    <Button style={styles.botonAgregar} title="Guardar" color="#841584" accessibilityLabel="Learn more about this purple button" onPress={() => this.guardarStore()} />
                </View>

                </View>)
        ;
}
}

const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"
];

let cambio = false;

const date = (date) => {
    var dateAux = date;
    var stringDate = dateAux.getDate() + " " + monthNames[dateAux.getMonth()] +
        " " + dateAux.getFullYear() + " - " + dateAux.getHours() + ":" + dateAux.getMinutes() + "hs";
    return stringDate;
};
