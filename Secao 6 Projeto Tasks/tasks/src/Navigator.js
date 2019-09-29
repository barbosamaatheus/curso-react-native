import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

// const MainRoutes = createStackNavigator({ Auth: Auth, Home: Agenda });

export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: Auth,
      Home: Agenda
    },
    {
      initialRouteName: 'AuthLoading',
    }
));
