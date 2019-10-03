/* 
Author: Jamie Lee Thomas Kerig
------------------------------
Reference to html area
<input type="button" id="add" value="Add to Array" >
<input type="button" id="displayResults" value="Display Results" ><br>
	 
<h2>Results</h2>
<textarea id="results">&nbsp;</textarea>
<table id="scores_table"></table>
------------------------------
INSTRUCTIONS: 
STEP ONE: Write an event handler for the click event of the Display Results button that uses a loop to calculate 
the average score for the four elements in the scores array. The handler should then display the average score 
in the text area element  (done &#x2713; )

STEP TWO: Enhance the code for the event handler so it also calculates and displays the high score and low score 
for the four elements in the array.

STEP THREE: Enhance the code for the event handler so it displays the names and scores of the elements in the arrays


STEP FOUR: Write an event handler for the click event of the Add to Array button that adds the user entries for 
name and score to the end of the names and scores arrays and then clears the entries from the text boxes. When 
you test this addition, make sure that the Display Results button still works correctly. 

STEP FIVE: add data validation to the event handler for the Add to Array button. 
The Name entry must not be empty and the Score entry must be a positive number from 0 through 100. 
If either entry is invalid, use the alert method to display this error message: “You must enter a name and a valid score”.
Make sure that your application moves the cursor to the Name field when the application starts 
and after a name and score has been added to the array.
*/
"use strict";
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) {
	return document.getElementById(id);
};

var clearInputs = function() {
	//clear previous input box
	document.getElementById("name").value = "";
	document.getElementById("score").value = "";
	
};

var clearResults = function() {
	document.getElementById("results").value = "";
};


var addScore = function() {
	document.getElementById("error_message").innerHTML = " ";
	//take from input and turn into variables
	var name = $("name").value;
	var score = $("score").value;
	console.log(name);
	console.log(score);
	//then add to array after testing
	if ( score < 0 || score > 100 || name === undefined || score === undefined || name === "" || score === ""  ) {
		//deny -- this still allows letters to go through the score section!! Add regex?? ^[0-9]*$
		document.getElementById("error_message").innerHTML = "You must enter a name and a valid score.";
	} else {
		//turn score into number
		score = Number( $("score").value);
		console.log("added to array");
		clearResults();
		names.push(name);
		scores.push(score);
		displayResults();
		clearInputs();
	}
};

function low() {
	var lowest = Math.min.apply(Math, scores);
	return lowest;
}

function high() {
	var highest = Math.max.apply(Math, scores);
	return highest;
}

function median() {
	var calculatedTotal = 0; //calculate average of all arrays
	for (var i = 0; i < scores.length; i++) {
			// if i is lesser than the length of the scores array, add one to the counter i
		calculatedTotal += scores[i];
			// var calculatedTotal + scores[current number in array based on i counter]
		console.log(i , scores , calculatedTotal);
	}
	return calculatedTotal / scores.length;
	//forumula for the average is total divided by the length of the array i.e. 4
}

var combinedArrays = function(){
	var list = "";
	for (var i = 0; i < names.length; i++) {
		var nameString = names[i] + " = " + scores[i];
        list += nameString + "\n";
		}
	return list;
};

function displayResults() {
	document.getElementById("results").value = " ";
	document.getElementById("error_message").innerHTML = " ";
	document.getElementById("results").value = "Average Score = " + median() + "\nHigh Score = " + high() + "\nLow Score = " + low()  + "\n\n " + combinedArrays() ;	
	
}

window.onload = function() {
	$("add").onclick = addScore;
	$("displayResults").onclick = displayResults;
	//on load of page, be on the look out for onclick and use this function
};