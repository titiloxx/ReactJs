import {createStackNavigator} from 'react-navigation';
import Cargados from '../Cargados';
import Agregar from '../Agregar';

const App = createStackNavigator({
    Home: { screen: Cargados }
});

export default App;