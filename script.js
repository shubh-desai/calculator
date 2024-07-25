// Initialization

const displayLower = document.getElementById("display-lower");
displayLower.style.fontSize = "40px";

const displayUpper = document.getElementById("display-upper");
displayUpper.style.fontSize = "20px";

const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const negate = document.getElementById("negate");
const equal = document.getElementById("equal");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const point = document.getElementById("point");

let operand1 = "0";
let operand2 = "";
let operator = "";
let operatorAdded = false;

displayLower.textContent = operand1;

// Attaching event listeners

one.addEventListener("click", appendOperand);
two.addEventListener("click", appendOperand);
three.addEventListener("click", appendOperand);
four.addEventListener("click", appendOperand);
five.addEventListener("click", appendOperand);
six.addEventListener("click", appendOperand);
seven.addEventListener("click", appendOperand);
eight.addEventListener("click", appendOperand);
nine.addEventListener("click", appendOperand);
zero.addEventListener("click", appendOperand);

point.addEventListener("click", addDecimalPoint);

add.addEventListener("click", appendOperator);
subtract.addEventListener("click", appendOperator);
multiply.addEventListener("click", appendOperator);
divide.addEventListener("click", appendOperator);
negate.addEventListener("click", appendOperator);
equal.addEventListener("click", appendOperator);

clear.addEventListener("click", reset);
backspace.addEventListener("click", del);

// functions

function appendOperand(event) {

    let number;

    switch (event.target.id) {
        case "one":
            number = 1;
            break;
        case "two":
            number = 2;
            break;
        case "three":
            number = 3;
            break;
        case "four":
            number = 4;
            break;
        case "five":
            number = 5;
            break;
        case "six":
            number = 6;
            break;
        case "seven":
            number = 7;
            break;
        case "eight":
            number = 8;
            break;
        case "nine":
            number = 9;
            break;
        case "zero":
            number = 0;
            break;
    }

    if (operatorAdded) {

        if (operand2 === "0") {

            if (number !== 0)
                operand2 = number.toString();
        } else {

            operand2 += number;
        }
        
        displayLower.textContent = operand2;
        displayUpper.textContent = operand1 + " " + operator;
    } else {

        if (operand1 === "0") {

            if (number !== 0)
                operand1 = number.toString();
        } else {

            operand1 += number;
        }
        
        displayLower.textContent = operand1;
    }
}

function appendOperator(event) {

    let new_operaor;

    switch (event.target.id) {
        case "add":
            new_operaor = "\u002B";
            break;
        case "subtract":
            new_operaor = "\u2212";
            break;
        case "multiply":
            new_operaor = "\u00D7";
            break;
        case "divide":
            new_operaor = "\u00F7";
            break;
        case "negate":
            new_operaor = "?";
            break;
        case "equal":
            new_operaor = "\u003D";
            break;
    }

    operate(new_operaor);
}

function operate(new_operator) {

    if (new_operator === "?") {

        if (!operatorAdded) {

            let temp = Number(operand1);
            temp = -temp;
            operand1 = temp.toString();

            displayLower.textContent = operand1;
        } else {

            if (operand2 !== "") {

                let temp = Number(operand2);
                temp = -temp;
                operand2 = temp.toString();
            }

            displayLower.textContent = operand2;
        }

        return;
    }

    if (!operatorAdded) {

        if (new_operator !== "\u003D") {

            operator = new_operator;
            operatorAdded = true;

            displayUpper.textContent = operand1 + " " + operator;
        }
    } else {

        if (operand2 === "") {

            if (new_operator !== "=") {

                operator = new_operator;

                displayUpper.textContent = operand1 + " " + operator;
            }
        } else {

            let number1 = Number (operand1);
            let number2 = Number (operand2);
            let answer;
        
            switch (operator) {
                case "\u002B":
                    answer = number1 + number2;
                    break;
                case "\u2212":
                    answer = number1 - number2;
                    break;
                case "\u00D7":
                    answer = number1 * number2;
                    break;
                case "\u00F7":
                    if (number2 === 0) {

                        alert("Division with 0 is not legal! Enter a number except 0.")
                        return;
                    } else {

                        answer = number1 / number2;
                    }
                    
                    break;
            }

            if (new_operator === "=") {

                displayUpper.textContent = operand1 + " " + operator +  " " + operand2 + " \u003D";
            }

            operand1 = answer.toString();
            operand2 = "";
            operatorAdded = false;
            operator = "";

            if (new_operator !== "=") {

                operator = new_operator;
                operatorAdded = true;
            }

            displayLower.textContent = answer;

            if (operatorAdded) {

                displayUpper.textContent = operand1 + " " + operator;
            }
        }
    }
}

function addDecimalPoint() {

    if (operatorAdded) {

        if (operand2 === "")
            operand2 = "0.";
        else if (!operand2.includes(".")) {

            operand2 += ".";
        }

        displayLower.textContent = operand2;
    } else {
        
        if (operand1 === "")
            operand1 = "0.";
        if (!operand1.includes(".")) {

            operand1 += ".";
        }

        displayLower.textContent = operand1;
    }
}

function reset () {

    operand1 = "0";
    operand2 = "";
    operator = "";
    operatorAdded = false;

    displayLower.textContent = operand1;
    displayUpper.textContent = "";
}

function del () {

    if (operatorAdded) {

        operand2 = operand2.substring(0, operand2.length - 1);

        if (operand2 === "") {

            operand2 = "0";
        }

        displayLower.textContent = operand2;
    } else {

        operand1 = operand1.substring(0, operand1.length - 1);

        if (operand1 === "") {

            operand1 = "0";
        }

        displayLower.textContent = operand1;
    }
}