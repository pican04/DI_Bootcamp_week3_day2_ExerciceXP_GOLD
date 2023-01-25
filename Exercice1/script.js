//EXERCICE 1

/**
 * Display the value of the selected option.

 * Add an additional option to the select tag:
<option value="classic">Classic</option>

The newly added option should be selected by default.
 */



let selectOption = document.getElementById("genres");

let options = document.querySelectorAll("option");

let newOption = document.createElement("option");
newOption.innerHTML = "Classic";
newOption.setAttribute("value", "classic");
newOption.setAttribute("selected","");
select.appendChild(newOption);


