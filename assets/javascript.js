// set up an array of words for array to store

var animalArray = ["monkey", "moose", "alligator", "hippopatomus", "tiger", "albatross", "snake", "horse", "donkey", "cat", "dog"],

var wordChoice = [],
var wins = 0,
var losses = 0,
var guessMade = 0,
var guessRemaining = 10,

//initialize the game

setupGame: function () {

	var objectKeys = Object.keys(this.animalArray);
	this.animalArray = objectKeys[Math.floor(Math.random() * objectKeys.length)];

}

//create key entry function
//inside function, loop through the array
//compare user selection of letter to computer's random selection of letter
//if same, use innerHTML to update guess on page, chances left remains the same
//if different, add guessed letter to page and decrease chances left by 1

//function to complete game when user guess matches computer's index chosen at start

//set up reset function to run through game again on click