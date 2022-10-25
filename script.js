(function (){

    "use strict"
    let currentDisplayValue = "";
    let storedDisplayValue = "";
    let currentOp;

    const screen = document.querySelector("#screen");
    const storage = document.querySelector("#storage");
    const current = document.querySelector("#current");
    const clearKey = document.querySelector("#clear");
    const delKey = document.querySelector("#delete");
    const numKeys = document.querySelectorAll(".num-key");
    const opKeys = document.querySelectorAll(".op-key");
    const equalKey = document.querySelector(".equal-key");

    clearKey.addEventListener("click", clear);
    delKey.addEventListener("click", del);
    for (const numKey of numKeys) {
        numKey.addEventListener("click", function(e) {
            currentDisplayValue += e.target.id;
            current.textContent = currentDisplayValue;
        });
    }

    for (const opKey of opKeys) {
        opKey.addEventListener("click", function(e) {
            currentOp = e.target.id;
            currentOp = convertID(currentOp);
            storedDisplayValue = `${currentDisplayValue} ${currentOp}`;
            storage.textContent = storedDisplayValue;
            del();
        });
    }

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
        storedDisplayValue = "";
        del();
        storage.textContent = storedDisplayValue;
    }

    function del() {
        currentDisplayValue = "";
        current.textContent = currentDisplayValue;
    }

    function convertID(opID) {
        let convertedID;
        switch (opID) {
            case "add": return convertedID = "+";
            case "subtract": return convertedID = "-"
            case "multiply": return convertedID = "*";
            case "divide": return convertedID = "/"
        }
    }

    
})()