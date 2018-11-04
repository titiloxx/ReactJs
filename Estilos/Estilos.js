import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 40,
        backgroundColor: 'skyblue',
        alignSelf: 'center'
    },
    texto: {
        fontSize: 20,
        alignSelf: 'center'
    },
    botonAgregarView: {
        width: 300,
        alignSelf: 'center'
    },
    botonAgregar: {
         height:100
    },
    agregarCNumero: {
        margin: 20,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    numeroContainer: {
        marginLeft: 20,
        marginRight: 20,
        padding:2,
        backgroundColor: '#FFC300',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1.5,
        borderRadius: 5
    },
    bottonNumero: {
        borderWidth: 1.5,
    },
    agregarBordes: {
        borderWidth: 1,
        borderRadius: 4
    },
    guardados_content: {
        flexDirection: 'column',
        margin:10
    }
});