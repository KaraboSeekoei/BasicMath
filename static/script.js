let currentInput = "a";

function appendNumber(num) {
    const field = document.getElementById("display" + currentInput.toUpperCase());
    field.value += num;
}

function switchInput() {
    currentInput = currentInput === "a" ? "b" : "a";
}

function clearInput() {
    document.getElementById("displayA").value = "";
    document.getElementById("displayB").value = "";
}