import React from 'react';
import { Button, View, Text, AsyncStorage, TouchableOpacity} from 'react-native';
import styles from './Estilos/Estilos';
import Cargados from './2';
import Agregar from './3';
import { createStackNavigator } from 'react-navigation'; 
import store from './store';//Redux

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        };
        store.subscribe(() => {
            this.setState({
                lista:store.getState().lista
            });
            this.guardar();
          }
        );
    }
    componentDidMount() {
        this.cargarDatos();
    }

    agregarLista(lista) {
        var aux = this.state.lista;
        aux.push(lista);
        this.setState({
            lista: aux
        });
    }

    irAgregarScreen(numerosx) {
        store.dispatch({
            type: "ACTUALIZAR_NUMEROS",
            numeros: numerosx
        });
        this.props.navigation.navigate('AgregarScreen');
    }//Carga los numeros guardados en el store y te lleva hacia AgregarScreen

    agregar() {
        store.dispatch({
            type: "CAMBIAR",
            cambiar: false
        });
        this.props.navigation.navigate('AgregarScreen');
    }


   cargarDatos() {
        {/*AsyncStorage.removeItem('items');*/}
       AsyncStorage.getItem('items').then((value) => {
            if (value !== null) {
                var parseado = JSON.parse(value);
                this.setState({
                    lista: parseado
                });
            }
        });
    }

    guardar() {
        AsyncStorage.setItem('items', JSON.stringify(store.getState().lista));
    }//Guarda los datos

    render() {
        return (
            <View style={styles.container}>
                <Cargados lista={this.state.lista} CargarNumeros={this.irAgregarScreen.bind(this)} function={this.agregar.bind(this)} />
            </View>
        );
    }
}

export default createStackNavigator(
    {
        MainScreen: {
            screen: Main,
            header: null,
            navigationOptions: {
                title: 'Home',
                header: null //this will hide the header
            }
        },
        AgregarScreen: {
            screen: Agregar,
            header: null,
            navigationOptions: {
                title: 'Home',
                header: null //this will hide the header
            }
        }
    },
    {
        initialRouteName: 'MainScreen'
    }

);


