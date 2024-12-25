// Select the button element
const button = document.getElementById("colorButton");

// Define an array of colors to cycle through
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFBF00"];
let currentColorIndex = 0;

// Add an event listener to the button to listen for a click event
button.addEventListener("click", () => {
  // Change the button's background color to the next color in the array
  button.style.backgroundColor = colors[currentColorIndex];

  // Update the current color index to cycle through the colors
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});
