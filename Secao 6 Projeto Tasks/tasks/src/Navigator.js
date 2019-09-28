import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

const MainRoutes = createStackNavigator({
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Agenda
    }
});
export default createAppContainer(createSwitchNavigator(
    { MainRoutes }, { initialRouteName: 'Auth' }
))
