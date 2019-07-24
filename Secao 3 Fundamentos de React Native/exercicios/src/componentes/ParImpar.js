import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

function ParOuImpar(numero) {
    /*  if (numero % 2 == 0) {
         return <Text style={Padrao.ex}> Par </Text >
     } else {
         return <Text style={Padrao.ex}> Impar </Text>
     } */

    //const valor = numero % 2 == 0 ? 'Par' : 'Impar'
    //return <Text style={Padrao.ex}> {valor} </Text> 

    return <Text style={Padrao.ex}> {numero % 2 == 0 ? 'Par' : 'Impar'} </Text>
}

export default props =>
    <View>
        <Text style={Padrao.ex}> {props.numero % 2 == 0 ? 'Par' : 'Impar'} </Text>

        {/*{ParOuImpar(props.numero)}*/}

        {/*  {
            props.numero % 2 == 0
                ? <Text style={Padrao.ex}> Par </Text>
                : <Text style={Padrao.ex}> Impar </Text>

        } */}
    </View>