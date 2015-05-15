var Store = {};

Store.active = [];
Store.postponed = [];
Store.completed = [];

// TODO: Update this for less confusion
Store.complete = function(text) {
	Store.completed.push(text);
};

module.exports = Store;