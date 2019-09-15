/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Agenda from './src/screens/Agenda';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Agenda);
