// Javascript for the counter functionality
document.addEventListener("DOMContentLoaded", function(){
    // Initialize the count variable
    let count = 0;

    // Get reference to the display and button elements
    const counterDisplay = document.getElementById("counter-display");
    const counterButton = document.getElementById("counter-button");

    // Add an event listener to the button
    counterButton.addEventListener("click", function(){
        // Increment the count variable
        count++;

        // Update the display text with the new count value
        counterDisplay.textContent = `You clicked ${count} times`;
    });
});