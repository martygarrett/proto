// create a new class called Greeting with input of Name and Message
var Greeting = Class.create({
	// using Prototype 1.6.0 and later allows us to overcome the use of 'prototype' and 'extend'
	initialize: function(name) {
		this.name = name;
	},
	greet: function(message) {
		return 'Hello ' + this.name + ', ';
	}
});

// create a new subclass of Greeting for a NYE message without using the Object.extend method
var NYE = Class.create(Greeting, {
	// redefine the greeting message method
	greet: function($super, message) {
		alert($super(message) + 'have a Happy New Years!');
	}
});
// again, create a new subclass of Greeting for a holiday message without using the Object.extend method
var HH = Class.create(Greeting, {
	// redefine the greeting message
	greet: function($super, message) {
		alert($super(message) + 'Happy Holidays to you!');
	}
});

//Get ready to Wish Joe a Happy New Year!
var joe = new NYE('Joe');
//Get ready to wish Sally Happy Holidays!
var sally = new HH('Sally');
