"use strict";
//declare variables
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var textDisplay;
var moreScores = 0

var $ = function (id) { 
	return document.getElementById(id); 
}

//input area for array entries
var addElement = function () {
    document.getElementById("error_message").innerHTML = " ";
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        document.getElementById("error_message").innerHTML = "You must enter a name and a valid score (1-100).";
    }

	else {
    names[names.length] = $("name").value;
    scores[scores.length] = parseInt($("score").value);
       $("name").value = "";
       $("score").value = "";
        moreScores = 1;
	}
 $("name").focus();
}

//functions area
var clearInputs = function() {
	//clear previous input box
	document.getElementById("name").value = "";
	document.getElementById("score").value = "";
};


 function displayResults() {
	var list = "";
	for (var i = 0; i < names.length; i++) {
		var nameString = names[i] + " = " + scores[i];
        list += nameString + "\n";
		} 
    document.getElementById("results").value =  list;	 
}
var clearResults = function() {
	document.getElementById("results").value = "";
};    
 //names.join("  ") + scores.join(" ");
 //}

function show_best() {
    //check to see if added new scores to array
   /* if (moreScores == 1){
     clearResults();
     moreScores = 0;
    //get new scores//
        console.log(scores);
        var highest = Math.max.apply(Math, scores);
        document.getElementById("results").value ="Best Score is " + highest;
    }
    else {
        console.log(scores);
        var highest = Math.max(parseInt(scores));
        document.getElementById("results").value ="Best Score is " + highest;}*/
    var highest = Math.max.apply(Math, scores);
     document.getElementById("results").value ="Best Score is " + highest;

}
 
//page ready area
window.onload = function () {
	$("add").onclick = addElement;
    $("list_array").onclick = displayResults;
    $("show_best").onclick = show_best;
	$("name").focus();
} 