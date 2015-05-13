'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TextInput,
  View,
  PanResponder,
} = React;

var Dimensions = require('Dimensions').get('window');

var Card = React.createClass({
  getDefaultProps: function() {
    return {
      initialTitle: 'Card'
    };
  },
  getInitialState: function() {
    return {
      title: this.props.initialTitle,
      touched: true,
      moveX: 0
    };
  },
  componentWillMount: function() {
  	this._panGesture = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The guesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.{x,y}0 will be set to zero now

        this.setState({
          touched: true
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        this.setState({
          moveX: gestureState.dx
        });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded

        this.setState({
          moveX: 0,
          touched: false
        });
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
    });
  },
  render: function() {
    var panStyles = {};

    panStyles['marginLeft'] = this.state.moveX;
    panStyles['opacity'] = 1 - (Math.abs(this.state.moveX) / (Dimensions.width / 2));

    return (
      <View {...this._panGesture.panHandlers} style={[styles.card, panStyles]}>
        <TextInput style={styles.cardText} value={this.state.title} onChangeText={(text) => this.setState({title: text})} />
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
  	flex: 1,
    fontSize: 20
  }
});

module.exports = Card;