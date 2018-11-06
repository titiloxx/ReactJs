import { createStore } from "redux";

const reducer = (state, action) => {

    if (action.type === "CARGAR_LISTA_ENTERA") {
        return {
            ...state,
            lista: action.estadoActual
        };
    }
    else if (action.type === "CARGAR_LISTA") {
        return {
            ...state,
            lista: state.lista.concat(action.estadoActual)
        };
    }
    else if (action.type === "BORRAR_TODOS_GUARDADOS") {
        return {
            ...state,
            lista: []
        };
    } //Borra los numeros actuales
    else if (action.type === "BORRAR_NUMEROS") {
        return {
            ...state,
            numerosActual: [0]
        };
    } //Borra los numeros actuales
    else if (action.type === "ACTUALIZAR_NUMEROS") {
        return {
            ...state,
            numerosActual: action.numeros,
            cambio: true
        };
    } //Actualiza los numeros actuales
    else if (action.type === "CAMBIAR") {
        return {
            ...state,
            cambio: action.cambio
        };
    } //Cambia la variable cambio utilizada para poder editar los valores que se habian puesto anteriormente
    return state;
};

export default createStore(reducer, { lista: [], numerosActual:[0],cambio:false});