const display = document.getElementById("display");

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

let operand1 = "";
let operand2 = "";
let operator = "";
let operatorAdded = false;

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

add.addEventListener("click", appendOperator);
subtract.addEventListener("click", appendOperator);
multiply.addEventListener("click", appendOperator);
divide.addEventListener("click", appendOperator);
negate.addEventListener("click", appendOperator);
equal.addEventListener("click", appendOperator);

function operate(new_operator) {

    if (!operatorAdded) {

        if (new_operator !== "=") {

            operator = new_operator;
            operatorAdded = true;
        }
    } else {

        if (operand2 === "") {

            if (new_operator !== "=") {

                operator = new_operator;
            }
        } else {

            let number1 = Number (operand1);
            let number2 = Number (operand2);
            let answer;
        
            switch (operator) {
                case "+":
                    answer = number1 + number2;
                    break;
                case "-":
                    answer = number1 - number2;
                    break;
                case "*":
                    answer = number1 * number2;
                    break;
                case "/":
                    answer = number1 / number2;
                    break;
        
                // ? and = left to handle
        
                // case "?":
                //     answer = number1 + number2;
                //     break;
                // default:
                //     break;
            }

            console.log(number1);
            console.log(number2);
            console.log(answer);

            operand1 = answer.toString();
            operand2 = "";
            operatorAdded = false;

            if (new_operator !== "=") {

                operator = new_operator;
                operatorAdded = true;
            }
        }
    }
}

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

        operand2 += number;
    } else {

        operand1 += number;
    }
}

function appendOperator(event) {

    let new_operaor;

    switch (event.target.id) {
        case "add":
            new_operaor = "+";
            break;
        case "subtract":
            new_operaor = "-";
            break;
        case "multiply":
            new_operaor = "*";
            break;
        case "divide":
            new_operaor = "/";
            break;
        case "negate":
            new_operaor = "?";
            break;
        case "equal":
            new_operaor = "=";
            break;
    }

    operate(new_operaor);

    // if (operand1 !== "") {

    //     if (operator !== "=") {

    //         operatorAdded = true;
    //     }
    // }

    // if (operand1 !== "" && operand2 !== "") {

    //     operate (operator);
    // }
}