import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyle from '../commonStyle'
import Task from '../components/Task'

export default class Agenda extends Component {
    state = {
        tasks: [
            {
                id: Math.random(),
                desc: 'Comprar Curso de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Concluir Curso',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: Math.random(),
                desc: 'Comprar Curso de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Concluir Curso',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: Math.random(),
                desc: 'Comprar Curso de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Concluir Curso',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: Math.random(),
                desc: 'Comprar Curso de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Concluir Curso',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: Math.random(),
                desc: 'Comprar Curso de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Concluir Curso',
                estimateAt: new Date(),
                doneAt: null
            },
            {
                id: Math.random(),
                desc: 'Comprar Curso de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Concluir Curso',
                estimateAt: new Date(),
                doneAt: null
            },
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>
                            Hoje
                        </Text>
                        <Text style={styles.subTitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} />} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subTitle: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taskContainer: {
        flex: 7,
    }

})