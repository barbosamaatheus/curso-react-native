import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native';
import commonStyle from '../commonStyle';
import backgoundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {
    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    /**
     * Essa função verifica se o usuario está ou não loggado.
     * 
     * @author: Matheus Barbosa
     * @param: none
     * @returns: none
     */
    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso!', 'Criar conta');
        } else {
            Alert.alert('Sucesso!', 'Logar');
        }
    };

    render() {
        return (
            <ImageBackground
                source={backgoundImage}
                style={styles.background}>
                <Text style={styles.title}> Tasks </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>
                        {this.state.stageNew ?
                            'Crie a sua conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew &&
                        <TextInput
                            placeholder='Nome'
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}>
                        </TextInput>
                    }
                    <TextInput
                        placeholder='E-mail'
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}>
                    </TextInput>
                    <TextInput
                        placeholder='Senha'
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}>
                    </TextInput>
                    {this.state.stageNew &&
                        <TextInput
                            placeholder='Confirmação'
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}>
                        </TextInput>
                    }
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => this.setState({ stageNew: !stageNew })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Criar uma conta'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground >
        )
    }
};