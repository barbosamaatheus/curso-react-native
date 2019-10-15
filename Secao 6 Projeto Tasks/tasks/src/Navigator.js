import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import commonStyle from './commonStyle';

import Agenda from './screens/Agenda';
import Auth from './screens/Auth';

// const MainRoutes = createStackNavigator({ Auth: Auth, Home: Agenda });

const MenuRoutes = {
  Today: {
    name: 'Today',
    screen: props => <Agenda title="Hoje" daysAhead={0} {...props} />,
    navigationOptions: {
      title: 'Hoje',
    },
  },
  Tomorrow: {
    name: 'Tomorrow',
    screen: props => <Agenda title="Amanha" daysAhead={1} {...props} />,
    navigationOptions: {
      title: 'Amanha',
    },
  },
  Week: {
    name: 'Week',
    screen: props => <Agenda title="Semana" daysAhead={7} {...props} />,
    navigationOptions: {
      title: 'Semana',
    },
  },
  Month: {
    name: 'Month',
    screen: props => <Agenda title="Mês" daysAhead={30} {...props} />,
    navigationOptions: {
      title: 'Mês',
    },
  },
};

const MenuConfig = {
  initialRouteName: 'Today',
  contentOptions: {
    labelStyle: {
      fontFamily: commonStyle.fontFamily,
      fontWeight: 'normal',
      fontSize: 20,
    },
    activeLabelStyle: {
      color: '#000',
    },
  },
};
const menuNavigator = createAppContainer(
  createDrawerNavigator(MenuRoutes, MenuConfig),
);

const MainRoutes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Auth,
      Home: menuNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default MainRoutes;
