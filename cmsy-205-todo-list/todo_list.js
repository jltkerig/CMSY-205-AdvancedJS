// JavaScript Document

/*
** Write the code for adding a task to this array when the user enters a task in the first text box and clicks the Add Task button.  

** This code should also blank out the text box. 

At this point, don’t worry about displaying the tasks in the text area for the task list. Instead, use alert statements to make sure this works when you add one or more items. 

Note: entry must be a string, do not accept blank values or all numbers, spaces in multiple word task is acceptable. 

Add the JavaScript code for the click event handler of the Show Next Task button. This handler should display the first task in the array in the Next task text box and remove its element from the array.

In the event handler for the Show Next Task button, test to make sure the array has elements in it. If it doesn’t, use the alert method to display “No tasks remaining” and clear the task from the Next task text box.


Add a JavaScript function that displays the elements in the array in the Task list text area. Then, call this function from both of the click event handlers so the updated task list is displayed each time a task is added to the list or removed from it.

Give this application a final test to make sure it works correctly.

Make sure that your application moves the cursor to the Add Task text box when the application starts and each time when Add Task button is clicked.

*/
"use strict";

// $ = ID 
var $ = function(id) {
    return document.getElementById(id);
};

//global arrays
var taskList = [];

// or you can use var array = new Array();

//function for button
document.getElementById("add_task").onclick = function add_to_list(){
	//reset error message
	document.getElementById("error_message").innerHTML = "";
	//new_task variable is input from form - user defined
	var new_task = document.getElementById("new_task").value;
	new_task = new_task.trim();
    console.log(new_task);
 
	//validate that the entry is a string
	if (  new_task.length < 1 || typeof new_task !== 'string' || new_task === undefined  ||  !isNaN(new_task)  ) {
			document.getElementById("error_message").innerHTML = "Please enter a valid entry.";
		
	}
    else {
    	//place item in array list and show me array in console
    	//taskList.push(new_task); <-- adds to end of array, I want to add it to the front. Personal preference
		taskList.unshift(new_task);
		console.log(taskList);
		
		//empty input after 
    	document.getElementById("new_task").value = " ";
	
		//display new array in task list
	 	document.getElementById("task_list").value = taskList;
		}

};
//display the first task in the array in the Next task text box and remove its element from the array. 
document.getElementById("show_next_task").onclick = function showNext(){
	if (taskList === undefined || taskList.length === 0){
	    //put out error message if there are no tasks on list
		document.getElementById("error_message").innerHTML = "No tasks remaining.";
		//empty Next Task input after 
    	document.getElementById("next_task").value = " ";
	}
	else{
		// get item from end of task list **personal preference of the order in which it's pulled from the array**
		// learning note: the index of the last item in an array is always the number of items of the array minus one.
		var nextTask = taskList[taskList.length - 1];
		console.log(nextTask);
		//display next task in input field
		document.getElementById("next_task").value = nextTask;
		//remove last item in array
 		taskList.pop();
		//display new array in task list - update list on removal
	 	document.getElementById("task_list").value = taskList;
	}
};