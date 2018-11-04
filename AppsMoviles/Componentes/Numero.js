import React from 'react';
import styles from '../Estilos/Estilos';
import {Text, View, Button } from 'react-native';
export default class Numero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.numeroContainer}>
                <View style={styles.agregarBordes}>
                    <Button style={styles.bottonNumero} color='#c1594e' title="     <     " onPress={this.props.restarNumero} />
                </View>
                <Text style={styles.texto}>{this.props.number}</Text>
                <View style={styles.agregarBordes}>
                    <Button style={styles.bottonNumero} color='#c1594e' title="     >     " onPress={this.props.sumarNumero}/>
                </View>
                </View>
            );
    }
}