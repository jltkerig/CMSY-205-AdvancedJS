Note: Solve any FOUR (4) problems.  Each problem is worth 25 points.  There is NO extra credit should you decide to solve remaining problem.

Problem-1: Modify the FAQs Application to display just one answer at a time (25 points)

In this problem, you’ll modify a FAQs application so only one answer can be displayed at a time.  Also, when the page is loaded, the answer to the first question should be displayed.  To make these modifications, you can use some of the filtering methods in figure 9-11.

![img](https://github.com/jltkerig/CMSY-205-AdvancedJS/blob/master/cmsy-205-final/FAQsApplication.jpg)

Open the HTML (index.html) and JavaScript (faqs.js) files provided in the "faqs" sub-folder in the Startup Zip folder.  This is the FAQs application from chapter 8.  Now, run this application to refresh your memory about how it works. Then, review the HTML and JavaScript code for this application.

In the JavaScript file, add statements to the start of the ready method that add the “minus” class to the first question and display the answer to the first question.

In the JavaScript file, comment out the code for the two statements in the click event handler.  Then, add code to this handler that removes the “minus” class from the h2 element that has that class and hides the division that follows it with a sliding motion that lasts for one second.

Still in the click event handler, add code that adds the “minus” class to the h2 element that was clicked and displays the division that follows it with a sliding motion that lasts for one second.

Run the application and click on a question whose answer is already displayed.  Note that the answer is hidden and then displayed again.  Now, fix that problem so nothing happens when the user clicks on a question whose answer is already displayed.
Problem-2: Use Plugins to Validate a Form (25 points)

In this problem, you’ll use the validation plugin and the additional-methods plugin to validate a reservation request form.

![img](https://github.com/jltkerig/CMSY-205-AdvancedJS/blob/master/cmsy-205-final/ReservationForm.jpg)

Open the HTML (index.html) and JavaScript (reservation.js) files provided in the "reservation_validation" sub-folder in the Startup Zip folder.  Then, run the application and click the Submit Request button to see the page that’s displayed when the form is submitted to the server.

Code a statement that moves the focus to the Arrival date text box when the form is first displayed.

Add jQuery code that validates all the text boxes on the form using the validation and additional-methods plugins. All of the text boxes require a value. In addition, the arrival date, the email address, and phone number must be in valid formats, and the number of nights must be a positive integer.

Add custom error messages to the validation for the number of nights that are consistent with the other error messages and that fit on the line that contains the Nights text box.

Problem-3: Create a Rollover Plugin (25 points)

In this problem, you’ll create a plugin that displays a different image when the mouse is rolled over an image in a list of images.

![img](https://github.com/jltkerig/CMSY-205-AdvancedJS/blob/master/cmsy-205-final/RolloverPlugin.jpg)

Open the HTML (index.html) and JavaScript (rollover.html) files provided in the "image_rollover" sub-folder in the Startup Zip folder.  Now, run this application to refresh your memory about how it works.

Review the code in the jquery.rollover.js file to see that it contains code for the standard plugin structure with the method name set to changeImage.

Copy the code in the ready function of the rollover.js file into the each method of the plugin.  Then, modify the selector for the each method in this copied code so its function is executed for each img element that’s a descendant of the element that the changeImage method is executed on.

Return to the rollover.js file, and replace the code it contains with a statement that calls the changeImage method for the “image_rollovers” list.

Add a script element for the jquery.rollover.js file to the HTML file before the script element for the rollover.js file. The application should now run just like it did before.

Problem-4: Use Widgets in a Form (25 points)

In this problem, you’ll modify a Reservation application so it uses Tabs, Datepicker, and Dialog widgets.

![img](https://github.com/jltkerig/CMSY-205-AdvancedJS/blob/master/cmsy-205-final/ReservationUsingWidgets.jpg)

Open the HTML (index.html) and JavaScript (reservation.js) files provided in the "reservation" sub-folder in the Startup Zip folder.  Now, run this application to see what the user interface looks like.

Modify the HTML so the contents of the three fieldset elements can be implemented as three tabs of a Tabs widget. When you do that, you can delete the fieldset and legend elements, and you can set the headings for the tabs to the content of the legend elements.
Add the jQuery code that implements the tabs.

Add the jQuery code that implements the Datepicker widget for the arrival date. The date can be from the current date to 90 days after the current date.

Code an event handler for the click event of the View Cancellation Policies button. This event handler should display the div element with an id of “dialog” as a modal Dialog widget.

Problem-5: Create Draggable and Droppable Task Assignment Lists (25 points)

In this problem, you will create task lists for two employees. Each task in the lists can be dragged from one list and dropped into the other list.

![img](https://github.com/jltkerig/CMSY-205-AdvancedJS/blob/master/cmsy-205-final/Draggable-Droppable.jpg)

Open the HTML (index.html) file provided in the "task_assignments" sub-folder in the Startup Zip folder.  Then, review the HTML in this file. Note that each task list is represented by a div element that contains a div element for each task. Also note that the div element for each task has a class of “ui-state-default”.

Add a jQuery statement that makes the task lists for both employees droppable areas.
Add jQuery code that makes the tasks for each employee draggable. Set the cursor option of the draggable interaction to “move” so the cursor shown above is displayed as a task is being dragged. Also, set the grid option to “[25, 34]” so a task will snap into the droppable area.

Add jQuery code that responds to the click event of the Add Task button for the first employee. When this button is clicked, use the prompt method to get a description of the task. If a description is entered and the OK button is clicked, add a task to the end of the other tasks for the employee. In addition, add code that makes the task you just added draggable.

Add jQuery code that responds to the click event of the Add Task button for the second employee. This code should work like the code for the first employee.
