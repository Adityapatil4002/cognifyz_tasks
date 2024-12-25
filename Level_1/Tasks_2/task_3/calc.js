// Select the elements
const addButton = document.getElementById("addButton");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");

// Add event listener to the Add button
addButton.addEventListener("click", () => {
  // Get the values from input fields and ensure they're numbers
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);

  // Validate the inputs
  if (isNaN(number1) || isNaN(number2)) {
    output.textContent = "Please enter valid numbers!";
    output.style.color = "red";
    return;
  }

  // Perform the addition
  const result = number1 + number2;

  // Display the result with an animation
  output.textContent = result;
  output.style.color = "green"; // Set color to green for result
});
