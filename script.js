
const display = document.getElementById("display");

function addToDisplay(val) {
    display.value += val;
}

function clearDisplay(){
    display.value = "";
}

function calculateRes(){
    const equation = display.value;
    
    const result = eval(equation)
    display.value = result;
}