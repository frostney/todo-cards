/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Card = require('./Card');

var TodoCards = React.createClass({
  getInitialState: function() {
    return {
      completed: 0
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Completed tasks ({this.state.completed})
        </Text>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('TodoCards', () => TodoCards);
