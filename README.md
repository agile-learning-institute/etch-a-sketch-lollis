# Etch-a-Sketch

A modern web-based etch-a-sketch drawing application built with HTML, CSS, and JavaScript. Create pixelated artwork by hovering over the grid squares and customize your canvas size for different levels of detail.

## Features

### 🎨 Drawing Functionality
- **Hover to Draw**: Move your mouse over grid squares to create pixelated drawings
- **Persistent Drawing**: Your artwork stays on the canvas until you clear it
- **Smooth Experience**: Responsive drawing with CSS transitions

### 🔧 Dynamic Grid Sizing
- **Customizable Canvas**: Change grid size from 1×1 to 100×100 squares
- **Maintained Dimensions**: Grid always stays 480px × 480px total size
- **Smart Scaling**: Squares automatically resize based on grid dimensions
- **Input Validation**: Maximum limit of 100 squares to prevent performance issues

### 🎛️ Controls
- **Change Grid Size**: Blue button to resize your canvas
- **Clear Grid**: Green button to erase your artwork and start fresh

## How to Use

1. **Open the Application**
   - Open `index.html` in your web browser
   - The default 16×16 grid will be displayed

2. **Drawing**
   - Move your mouse over the grid squares to draw
   - Squares will turn dark gray when you hover over them
   - Create pixelated artwork by moving your mouse around

3. **Change Grid Size**
   - Click the "Change Grid Size" button
   - Enter a number between 1 and 100 in the popup
   - The grid will regenerate with your new size

4. **Clear Your Artwork**
   - Click the "Clear Grid" button to erase everything
   - Start fresh with a clean canvas


## Technical Details

### Built With
- **HTML5**: Semantic structure with container div
- **CSS3**: Flexbox layout for responsive grid
- **Vanilla JavaScript**: Dynamic grid generation and event handling

### Key Technologies
- **Flexbox**: Used for grid layout (not CSS Grid as per requirements)
- **Dynamic CSS**: JavaScript-generated styles for responsive square sizing
- **Event Listeners**: Mouse hover effects for drawing functionality
- **DOM Manipulation**: Dynamic grid creation and management

### File Structure
```
etch-a-sketch-lollis/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and layout
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Browser Compatibility

This application works in all modern browsers that support:
- ES6 JavaScript features
- CSS Flexbox
- HTML5 semantic elements

## Performance Notes

- **Maximum Grid Size**: Limited to 100×100 (10,000 squares) to prevent browser performance issues
- **Memory Usage**: Larger grids use more memory and may cause slower performance
- **Recommended Range**: 10×10 to 50×50 for optimal performance and usability

## Future Enhancements

Potential features that could be added:
- Color picker for different drawing colors
- Save/load artwork functionality
- Different drawing modes (pen, eraser, fill)
- Keyboard shortcuts
- Touch support for mobile devices

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements or bug fixes.

---

**Happy Drawing!** 🎨