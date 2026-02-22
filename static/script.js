let currentInput = "a"; // 'a' = first input, 'b' = second input

// Allow clicking inputs to override active input
document.getElementById("displayA").addEventListener("click", () => currentInput = "a");
document.getElementById("displayB").addEventListener("click", () => currentInput = "b");

// Append number to current input
function appendNumber(num) {
    const field = document.getElementById("display" + currentInput.toUpperCase());
    field.value += num;

    // Auto-switch from first input to second if first has value
    if (currentInput === "a" && field.value.length > 0) {
        currentInput = "b";
    }
}

// Set operation for Python
function setOperation(op) {
    document.getElementById("operationInput").value = op;

    // Highlight selected operation
    document.querySelectorAll(".operations button").forEach(btn => btn.classList.remove("selected"));
    document.querySelector(`.operations button[onclick="setOperation('${op}')"]`)?.classList.add("selected");
}

// Clear inputs and show 0 immediately
function clearInput() {
    document.getElementById("displayA").value = "";
    document.getElementById("displayB").value = "";
    document.getElementById("operationInput").value = "c";
    currentInput = "a";

    // Update result display immediately
    document.getElementById("resultDisplay").textContent = "Result: 0";
}