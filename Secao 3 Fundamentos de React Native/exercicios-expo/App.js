import * as React from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var width = Dimensions.get('window').width; //full width
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 70, height: 60, margin: 20 }}
          source={{ uri: 'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png' }}

        />
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>Hello, This is my first app.</Text>
        <eText>Click in the buttons and watch the reactions :))</eText>

        <View style={{ backgroundColor: '#DCDCDC', flex: 0.1, flexDirection: 'row', alignItems: 'flex-end', width: width, justifyContent: 'space-evenly' }}>
        
          <Icon.Button
            size={35}
            name="home"
            color="#2B2B2B"
            backgroundColor="transparent"
            onPress={() => alert('Oi cla ♥')} />

          <Icon.Button
            size={35}
            name="plus"
            color="#2B2B2B"
            backgroundColor="transparent"
            onPress={() => alert('Criei esse aplicativo e escrevi aqueles textos do meio em ingles sozinho kk')} />

          <Icon.Button
            size={35}
            name="user"
            color="#2B2B2B"
            backgroundColor="transparent"
            onPress={() => alert('te amo ta? é só isso hehe')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    flex: 0.3,
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    padding: 10,
    flex: 0.6,
    textAlign: 'center',
    color: '#333333',
  },
});
