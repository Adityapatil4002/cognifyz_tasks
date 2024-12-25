document.getElementById("greetingButton").addEventListener("click", function() {
    // Get the current hour
    const currentHour = new Date().getHours();
    let greetingMessage = "";
  
    // Determine the greeting based on the time of day
    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
      greetingMessage = "Good Afternoon!";
    } else {
      greetingMessage = "Good Evening!";
    }
  
    // Display the greeting in the alert box
    document.getElementById("greetingMessage").textContent = greetingMessage;
    document.getElementById("alertBox").style.display = "block"; // Show the alert box
  });
  
  // Close the alert box when the close button is clicked
  document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("alertBox").style.display = "none";
  });
  