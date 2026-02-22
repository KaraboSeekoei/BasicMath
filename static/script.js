let display = document.getElementById("display");

function insertAtCursor(text) {
    let start = display.selectionStart;
    let end = display.selectionEnd;
    let value = display.value;

    display.value = value.slice(0, start) + text + value.slice(end);
    // Move cursor after inserted text
    display.selectionStart = display.selectionEnd = start + text.length;
}

// Append numbers
function appendNumber(num) {
    insertAtCursor(num);
}

// Append operations
function appendOperation(op) {
    // Prevent two operators in a row
    let lastChar = display.value.slice(-1);
    if (display.value && !"+-*/".includes(lastChar)) {
        insertAtCursor(op);
    }
}

// Clear input
function clearInput() {
    display.value = "";
    document.getElementById("resultDisplay").textContent = "Result: 0";
}

// Calculate result
function calculate() {
    try {
        let expr = display.value.replace("×", "*").replace("÷", "/");
        let result = eval(expr);
        document.getElementById("resultDisplay").textContent = "Result: " + result;
        display.value = result;
    } catch (e) {
        document.getElementById("resultDisplay").textContent = "Error";
    }
}