import React, { Component } from 'react'
import { View, Text, TouchableHighlight} from 'react-native'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    incrementar = () => {
        this.setState({numero: this.state.numero + 1})
    }
    
    zerar = () => {
        this.setState({numero: this.props.numeroInicial})
    }

    render() {
        //this.props.numero = 10; //Não funciona pois as propriedades são somente leitura 
        return (
            <View>
                <Text style = {{fontSize: 40}}> { this.state.numero } </Text>

                <TouchableHighlight 
                onPress = {this.incrementar}
                onLongPress = {this.zerar}>

                    <Text>Incrementar/Zerar</Text>
                
                </TouchableHighlight>
                
            </View>
        )
    }
}

