// Create a new popup div
const popup = document.createElement("div");
popup.classList.add("popup");

// Create a heading for the popup
const heading = document.createElement("h2");
heading.textContent = "What do you want?";
popup.appendChild(heading);

// Create a div for the options
const options = document.createElement("div");
options.classList.add("options");

// Create a few option checkboxes
const House = createCheckbox("House");
options.appendChild(House);

const Apartment = createCheckbox("Apartment");
options.appendChild(Apartment);

const Food = createCheckbox("Food");
options.appendChild(Food);

const Shopping = createCheckbox("Shopping");
options.appendChild(Shopping);

// Create an "Other" text box
const otherInput = document.createElement("input");
otherInput.placeholder = "Other...";
options.appendChild(otherInput);

popup.appendChild(options);

// Create a submit button
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", function() {
  const selectedOptions = getSelectedOptions();
  console.log(selectedOptions);
  popup.remove();
});
popup.appendChild(submitButton);

// Append the popup to the body
document.body.appendChild(popup);

// Helper function to create a checkbox with the given label
function createCheckbox(label) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = label;
  checkbox.value = label;
  
  const checkboxLabel = document.createElement("label");
  checkboxLabel.textContent = label;
  checkboxLabel.setAttribute("for", label);
  
  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxLabel);
  
  return checkboxContainer;
}

// Helper function to get an array of the selected options
function getSelectedOptions() {
  const selectedCheckboxes = options.querySelectorAll("input[type='checkbox']:checked");
  const selectedOptions = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
  
  if (otherInput.value !== "") {
    selectedOptions.push(otherInput.value);
  }
  
  return selectedOptions;
}
