//your JS code here. If required.
// Get the container element
var container = document.getElementById("container");

// Array of different background colors
var colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#d35400", "#34495e", "#27ae60", "#2980b9"];

// Create 800 boxes and assign different background colors and the class name "square"
for (var i = 0; i < 800; i++) {
    var box = document.createElement("div");
    box.className = "box square"; // Assigning classes "box" and "square"
    
    // Get a random index from the colors array
    var randomIndex = Math.floor(Math.random() * colors.length);
    
    // Assign the background color to the box
    box.style.backgroundColor = colors[randomIndex];
    
    container.appendChild(box);
}

// Get all elements with class "box"
var boxes = document.querySelectorAll('.box');

// Add event listeners to handle mouseover and mouseout events
boxes.forEach(function(box) {
    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = '#2ecc71'; // Change background color on hover
    });

    box.addEventListener('mouseout', function() {
        // Set a timeout to smoothly transition back to the original color after 1 second
        setTimeout(function() {
            box.style.backgroundColor = ''; // Revert back to original background color
        }, 1000); // 1000 milliseconds = 1 second
    });
});

