//EXERCICE 2

/**
 * Add a click event listener to the <input type="button">.
 *  When clicked on, it should call a function named : removecolor() 
 that removes the selected color from the dropdown list.
 */


let bouton = document.querySelector("input");

bouton.addEventListener("click", removeSelectedColor);

function removeSelectedColor(element) {
  element.preventDefault();
  let colorSelect = document.querySelectorAll("option");
  for (let i = 0; i < colorSelect.length; i++) {
    if (colorSelect[i].selected) {
      colorSelect[i].remove();
      break;
    }
  }
}
