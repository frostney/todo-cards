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
          Completed tasks (0)
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
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 125,
    height: 125,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('TodoCards', () => TodoCards);
