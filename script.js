// Get the container element and buttons
const container = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');
const gridSizeBtn = document.getElementById('grid-size-btn');

// Current grid size
let currentGridSize = 16;

// Function to create a grid with specified size
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size to maintain 480px total width
    const squareSize = 480 / size;
    
    // Update CSS for new square size
    const style = document.createElement('style');
    style.textContent = `
        .grid-square {
            width: ${squareSize}px;
            height: ${squareSize}px;
            border: 1px solid #ddd;
            box-sizing: border-box;
            background-color: white;
            transition: background-color 0.1s ease;
        }
    `;
    
    // Remove existing style if it exists
    const existingStyle = document.getElementById('dynamic-grid-style');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    style.id = 'dynamic-grid-style';
    document.head.appendChild(style);
    
    // Create and append grid squares
    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Add hover effect for drawing
        square.addEventListener('mouseenter', function() {
            this.classList.add('drawn');
        });
        
        container.appendChild(square);
    }
}

// Function to get new grid size from user
function getNewGridSize() {
    let newSize;
    
    do {
        const input = prompt(`Enter the number of squares per side (1-100):\nCurrent size: ${currentGridSize}x${currentGridSize}`);
        
        // If user cancels, return without changing
        if (input === null) {
            return;
        }
        
        newSize = parseInt(input);
        
        // Validate input
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert('Please enter a valid number between 1 and 100.');
        }
    } while (isNaN(newSize) || newSize < 1 || newSize > 100);
    
    return newSize;
}

// Grid size button functionality
gridSizeBtn.addEventListener('click', function() {
    const newSize = getNewGridSize();
    if (newSize && newSize !== currentGridSize) {
        currentGridSize = newSize;
        createGrid(currentGridSize);
    }
});

// Clear button functionality
clearBtn.addEventListener('click', function() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.classList.remove('drawn');
    });
});

// Initialize the grid with default size
createGrid(currentGridSize);
