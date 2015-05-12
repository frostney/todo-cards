'use strict';

var React = require('react-native');

var {
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

var styles = StyleSheet.create({
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

module.exports = Card;