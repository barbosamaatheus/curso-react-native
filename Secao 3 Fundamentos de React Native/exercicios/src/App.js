import React from 'react';
import { StyleSheet, View } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MageSena } from './componentes/Multi'

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Simples texto = 'Flexivel!!' />  
        <ParImpar numero = {31} />  
        <Inverter texto = 'React-Native' /> 
        <MageSena numeros = {6} />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
