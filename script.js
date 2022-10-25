(function (){

    "use strict"
    let currentDisplayValue;
    let storedDisplayValue;

    const screen = document.querySelector("#screen");
    const clearKey = document.querySelector("#clear");
    const delKey = document.querySelector("#delete");
    const numKeys = document.querySelectorAll(".num-key");
    const opKeys = document.querySelectorAll(".op-key");
    const equalKey = document.querySelector(".equal-key");

    clearKey.addEventListener("click", clear);
    delKey.addEventListener("click", del);

    function add(a,b) {
        return a + b;
    }

    function subtract(a,b) {
        return a - b;
    } 

    function multiply(a,b) {
        return a * b;
    }

    function divide(a,b) {
        return a / b;
    }

    function operate(operator, a, b) {
        switch (operator) {
            case "+": return add(a,b);
            case "-": return subtract(a,b);
            case "*": return multiply(a,b);
            case "/": return divide(a,b);
        }
    }

    function clear() {
        storedDisplayValue = null;
    }

    function del() {
        currentDisplayValue = null;
    }

    
})()