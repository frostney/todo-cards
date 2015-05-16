var Dispatcher = require('./Dispatcher');

var Store = {};

Store.active = [];
Store.postponed = [];
Store.completed = [];

// TODO: Update this for less confusion
Store.complete = function(text) {
	Store.completed.push(text);
	
	Dispatcher.trigger('completed', Store.completed);
};

module.exports = Store;