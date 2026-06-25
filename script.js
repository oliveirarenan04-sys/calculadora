const display = document.getElementById("display");

function append(value) {
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);

    if (display.textContent === "") {
        display.textContent = "0";
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Erro";
    }
}