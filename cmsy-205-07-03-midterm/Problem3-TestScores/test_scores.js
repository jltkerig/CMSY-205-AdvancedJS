"use strict";
//declare variables
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var textDisplay;
 

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
    clearInputs();
    clearResults();
     
	}
 $("name").focus();
}

//functions area
var clearInputs = function() {
	document.getElementById("name").value = "";
	document.getElementById("score").value = "";
};


 function displayResults() {
	var list = "";
	for (var i = 0; i < names.length; i++) {
		var nameString = names[i] + ", " + scores[i];
        list += nameString + "\n";
		} 
    document.getElementById("results").value =  list;	 
}
var clearResults = function() {
	document.getElementById("results").value = "";
};    
 

function show_best() {
    
    //find position of highest score, use it to find position of name in array = post score and name when done
    var highest = Math.max.apply(Math, scores);
    var nameCompare = scores.indexOf(highest);
    
    console.log(nameCompare);
    var nameFound = names[nameCompare];
    console.log(nameFound);
    
    document.getElementById("results").value ="Best Score: " + nameFound + ", " + highest;

}
 
//page ready area
window.onload = function () {
	$("add").onclick = addElement;
    $("list_array").onclick = displayResults;
    $("show_best").onclick = show_best;
	$("name").focus();
} 