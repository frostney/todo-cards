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

var Card = React.createClass({
  getDefaultProps: function() {
    return {
      initialTitle: 'Card'
    };
  },
  getInitialState: function() {
    return {
      title: this.props.initialTitle
    };
  },
  render: function() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText}>{this.state.title}</Text>
      </View>
      );
  }
});

var TodoCards = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 133,
    height: 133,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('TodoCards', () => TodoCards);
