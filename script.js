const display = document.querySelector('.display');
const operator = ['+', '-', '*', '/'];

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    if(operator.includes(lastChar) && operator.includes(input)) {
        return;
    }
    display.value += input
}

function clearDisplay() {
    display.value = "";
}

function deleteNum() {
    display.value = display.value.slice(0, display.value.length - 1);
}

function calculate() {
    try {

        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}

