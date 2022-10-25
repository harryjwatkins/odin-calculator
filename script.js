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
            if (e.target.id === "decimal") {
                currentDisplayValue += ".";
            }
            else {
                currentDisplayValue += e.target.id;
            }
            current.textContent = currentDisplayValue;
        });
    }

    for (const opKey of opKeys) {
        opKey.addEventListener("click", function(e) {
            currentOp = e.target.id;
            currentOp = convertID(currentOp);
            storage.textContent = `${currentDisplayValue} ${currentOp}`;
            storedDisplayValue = currentDisplayValue;
            del();
        });
    }

    equalKey.addEventListener("click", function(e) {
        if (currentDisplayValue === "0" && currentOp === "/") {
            alert("You have tried to divide by 0, resetting the calculator for you");
            clear();
        }
        else {
            storedDisplayValue = +storedDisplayValue;
            currentDisplayValue = +currentDisplayValue;
            currentDisplayValue = operate(currentOp, storedDisplayValue, currentDisplayValue)
            current.textContent = currentDisplayValue;
            storage.textContent = "";
        }
        
    });

    function add(a,b) {
        return (a.toFixed(2)*1000 + b.toFixed(2)*1000)/1000;
    }

    function subtract(a,b) {
        return parseFloat((a - b).toFixed(4));
    } 

    function multiply(a,b) {
        return parseFloat((a * b).toFixed(4));
    }

    function divide(a,b) {
        return parseFloat((a / b).toFixed(4));
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
        del();
        storedDisplayValue = "";
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
            case "subtract": return convertedID = "-";
            case "multiply": return convertedID = "*";
            case "divide": return convertedID = "/";
        }
    }

    
})()