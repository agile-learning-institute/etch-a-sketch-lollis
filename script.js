// Get the container element and clear button
const container = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');

// Create 16x16 grid (256 squares total)
const gridSize = 16;
const totalSquares = gridSize * gridSize;

// Create and append grid squares
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    
    // Add hover effect for drawing
    square.addEventListener('mouseenter', function() {
        this.classList.add('drawn');
    });
    
    container.appendChild(square);
}

// Clear button functionality
clearBtn.addEventListener('click', function() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.classList.remove('drawn');
    });
});
