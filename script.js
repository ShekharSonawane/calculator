let display = document.getElementById('display');

function press(val) {
    // Prevent double operators
    if ("+-*/".includes(val) && display.value.slice(-1).match(/[\+\-\*\/]/)) {
        display.value = display.value.slice(0, -1) + val;
    } else {
        display.value += val;
    }
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
