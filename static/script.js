// Current input field: "a" or "b"
let currentInput = "a";

// Default operation
let operation = "add";

// Append number to current input
function appendNumber(num) {
    const field = document.getElementById("display" + currentInput.toUpperCase());
    field.value += num;
}

// Switch input field
function switchInput() {
    currentInput = currentInput === "a" ? "b" : "a";
}

// Clear both inputs
function clearInput() {
    document.getElementById("displayA").value = "";
    document.getElementById("displayB").value = "";
}

// Set operation and update hidden input for Python
function setOperation(op) {
    operation = op;
    document.getElementById("operationInput").value = op;

    // Highlight selected operation button
    document.querySelectorAll(".operations button").forEach(btn => btn.classList.remove("selected"));
    document.querySelector(`.operations button[onclick="setOperation('${op}')"]`)?.classList.add("selected");
}