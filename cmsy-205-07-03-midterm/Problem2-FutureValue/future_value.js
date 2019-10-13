var $ = function (id) {
    return document.getElementById(id);
} 

function clearRate() {
    $('rate').value = ''
}

var calculateClick = function () {
    var investment = parseFloat( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var months = parseInt( $("months").value );
    
if (isNaN(investment) || investment < 100 || investment > 100000) {
		document.getElementById("investError").innerHTML = "Must be an integer from 100 - 100,000.";
	} 
	else if(isNaN(annualRate) || annualRate < .1 || annualRate > 12) {
		document.getElementById("rateError").innerHTML = "Must be a value from .1 - 12.";
        document.getElementById("investError").innerHTML = "";
 
	}
	else if(isNaN(months) || months < 1 || months > 50) {
		document.getElementById("monthsError").innerHTML = "Must be an integer from 1 - 50.";
        document.getElementById("rateError").innerHTML = "";
	}
	// if all entries are valid, calulate future value
	else {
         //var monthlyRate = annualRate / 12;
        //var months = years * 12;
		futureValue = investment;
		for ( i = 1; i <= months; i++ ) {
            annualRate = (annualRate/12)*months;
			futureValue += futureValue * annualRate / 100;
		}
		$("future_value").value = futureValue.toFixed();
        document.getElementById("monthsError").innerHTML = "";
	} 
}
window.onload = function () {
    $("calculate").onclick = calculateClick;
    $("investment").focus();
    $("rate").ondblclick = clearRate();
}
