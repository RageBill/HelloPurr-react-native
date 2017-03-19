/**
 React Native App By Kelvin Chu
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image,
  Text,
  View
} from 'react-native';

var Sound = require('react-native-sound');

var meow = new Sound('meow.mp3', Sound.MAIN_BUNDLE, (e) => {
  if (e){
    console.log('Error!');
  } else {
    console.log('Success!');
  }
});

const purr = () => {
  meow.play();
}



export default class HelloPurr extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          This App is made with React Native!
        </Text>
        <TouchableHighlight onPress={purr}>
        <Image
          source={require('./kitty.png')}
        />
        </TouchableHighlight>
        <Text>
          Pet Me!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloPurr', () => HelloPurr);
