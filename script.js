let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Basic calculation
function calculate() {
    try {
        let expression = display.value;

        // Convert Math.PI text correctly
        let result = eval(expression);

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Square
function square() {
    try {
        let number = eval(display.value);
        display.value = number * number;
    } catch {
        display.value = "Error";
    }
}

// Square root
function squareRoot() {
    try {
        let number = eval(display.value);
        display.value = Math.sqrt(number);
    } catch {
        display.value = "Error";
    }
}

// Sine
function sin() {
    try {
        let number = eval(display.value);

        // Convert degrees to radians
        display.value = Math.sin(number * Math.PI / 180);
    } catch {
        display.value = "Error";
    }
}

// Cosine
function cos() {
    try {
        let number = eval(display.value);

        display.value = Math.cos(number * Math.PI / 180);
    } catch {
        display.value = "Error";
    }
}

// Tangent
function tan() {
    try {
        let number = eval(display.value);

        display.value = Math.tan(number * Math.PI / 180);
    } catch {
        display.value = "Error";
    }
}

// Log base 10
function log() {
    try {
        let number = eval(display.value);

        display.value = Math.log10(number);
    } catch {
        display.value = "Error";
    }
}

// Natural logarithm
function ln() {
    try {
        let number = eval(display.value);

        display.value = Math.log(number);
    } catch {
        display.value = "Error";
    }
}