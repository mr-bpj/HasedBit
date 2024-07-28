function createDiv(width, height, text) {
    // Create a new div element
    var newDiv = document.createElement('div');
    
    // Set the width and height with 'px' units
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    
    // Set the text content of the div
    newDiv.textContent = text;
    
    // Get the container div by id
    var container = document.getElementById('container');
    
    // Append the new div to the container
    container.appendChild(newDiv);
}
