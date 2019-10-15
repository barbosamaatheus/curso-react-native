import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import axios from 'axios';
import {server, showError} from '../common';

import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';

import moment from 'moment';
import 'moment/locale/pt-br';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';

import commonStyle from '../commonStyle';

import Task from '../components/Task';
import AddTask from './AddTask';

export default class Agenda extends Component {
  state = {
    tasks: [],
    visibleTasks: [],
    showDoneTasks: true,
    showAddTask: false,
  };

  AddTask = async task => {
    try {
      await axios.post(`${server}/tasks`, {
        desc: task.desc,
        estimateAt: task.date,
      });
      this.setState({showAddTask: false}, this.loadtasks);
    } catch (err) {
      showError(err);
    }
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = task => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }
    this.setState({visibleTasks});
  };

  deleteTask = async id => {
    try {
      await axios.delete(`${server}/tasks/${id}`);
      await this.loadtasks();
    } catch (err) {
      showError(err);
    }
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  componentDidMount = async () => {
    this.loadtasks();
  };

  toggleTask = async id => {
    try {
      await axios.put(`@{server}/tasks/${id}/toggle`);
      await this.loadtasks();
    } catch (err) {
      showError(err);
    }
  };

  loadtasks = async () => {
    try {
      const maxDate = moment()
        .add({days: this.props.daysAhead})
        .format('YYYY-MM-DD 23:59');
      const res = await axios.get(`${server}/tasks?date=${maxDate}`);
      this.setState({tasks: res.data}, this.filterTasks);
    } catch (err) {
      showError(err);
    }
  };
  render() {
    let styleColor = null;
    let image = null;

    switch (this.props.daysAhead) {
      case 0:
        styleColor = commonStyle.colors.today;
        image = todayImage;
        break;
      case 1:
        styleColor = commonStyle.colors.tomorrow;
        image = tomorrowImage;
        break;
      case 7:
        styleColor = commonStyle.colors.week;
        image = weekImage;
        break;
      default:
        styleColor = commonStyle.colors.month;
        image = monthImage;
        break;
    }

    return (
      <View style={styles.container}>
        <AddTask
          isVisible={this.state.showAddTask}
          onSave={this.AddTask}
          onCancel={() => this.setState({showAddTask: false})}
        />
        <ImageBackground source={image} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity
              onPress={(() => this, props.navigation.openDrawer())}>
              <Icon
                name="bars"
                size={20}
                color={commonStyle.colors.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyle.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.subTitle}>
              {moment()
                .locale('pt-br')
                .format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.taskContainer}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task
                {...item}
                onToggleTask={this.toggleTask}
                onDelete={this.deleteTask}
              />
            )}
          />
        </View>
        <ActionButton
          buttonColor={styleColor}
          onPress={() => this.setState({showAddTask: true})}
        />
      </View>
    );
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
  },
  iconBar: {
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
