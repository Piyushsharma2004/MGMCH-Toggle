const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const errorMessage = document.getElementById('error-message');
const checkboxOne = document.getElementById('pref1')
let checkboxTwo = document.getElementById('pref5')
function checkSelection() {
  let selectedCount = 0;
  
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      selectedCount++;
      if (selectedCount === 5 || checkboxTwo.checked === true) {
        checkboxOne.checked= false; // Uncheck option 1 if 4 others are selected
      }
       if (checkboxOne.checked === true ) {
        checkboxTwo.checked = false; // Uncheck option 1 if 4 others are selected
      }
    
     
    }}
    if (selectedCount < 2) {
        errorMessage.textContent = "Please select at least two options.";
      } else if (selectedCount > 4) {
        errorMessage.textContent = "Please select a maximum of four options.";
      } else {
        errorMessage.textContent = "";
      }
  }

  
checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkSelection));

// Additional code to handle checkboxOne click event
checkboxOne.addEventListener('click', function() {
  if (checkboxOne.checked === true) {
    checkboxTwo.checked = false; // Uncheck option 2 if option 1 is selected
  }
});