import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MageSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'


export default createDrawerNavigator ({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex' }
    },

    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Comunicação Indireta' }
    },
    Avo: {
        screen: () => <Avo nome = 'João' sobrenome = 'Silva' />,
        navigationOptions: {title: 'Comunicação Direta'}
    },
    Evento: {
        screen: Evento
    },   
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },   
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () =>  <Contador numeroInicial = {1000}/>
    }, 
    MageSena: {
        screen: () =>  <MageSena numeros = {6} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () =>  <Inverter texto = 'React Native!' />
    },
    ParImpar: {
        screen: () =>  <ParImpar numero = {30} />,
        navigationOptions: {title: 'Par ou Impar'}
    }
    ,
    Simples: {
        screen: () =>  <Simples  texto = 'Flexivel!!' />
    }
}, {drawerWidth: 300})