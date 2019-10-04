//function allows you to write id's without using # before id name
var $ = function (id) {
    return document.getElementById(id);
};
   
var make_change = function() {
//grab value from input first and make it a variable for function
    //grab ID centsID and turn it into cents variable
    
 var cents = $("cents").value;
    
    //check variable to make sure it's between 0 and 99
    if( isNaN(cents) || cents >=0 || cents <=99) {
        
        //if correct, calculate - start with quarters
        //note to self: difference between parseInt && math.floor ? parseint is made for string conversion
        var quarters =  Math.floor(cents / 25) ;
        cents = cents % 25;
        var dimes =  Math.floor(cents / 10);
        cents = cents % 10;
        var nickels = Math.floor(cents / 5);
        cents = cents % 5;
        var pennies = Math.floor(cents / 1);
        
    //put calculations back into input areas
        $("quarters").value = quarters;
        $("dimes").value = dimes;
        $("nickels").value = nickels;
        $("pennies").value = pennies; 
        
} else {
    //if doesn't pass check,send alert and reset fields
    alert('Please provide a number between 0 and 99');
    //reset inputs to blank
    $("quarters").value = " "
    $("dimes").value = " "
    $("nickels").value = " "
    $("pennies").value = " "
}
};
//button that makes the magic happen
window.onload = function () {
      $("calculate").onclick = make_change; 
       document.getElementById("quarters").disabled = true;
       document.getElementById("dimes").disabled = true;
       document.getElementById("nickels").disabled = true;
       document.getElementById("pennies").disabled = true;
}