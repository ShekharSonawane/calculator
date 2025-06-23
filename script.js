let display = document.getElementById('display');

function press(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}