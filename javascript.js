const container = document.createElement("div");
container.classList.add('container');
document.body.appendChild(container);
container.style.border = "5px solid black";
container.style.height = "100px";

const display = document.createElement("div");
display.classList.add('display');
container.appendChild(display);
display.style.border = "5px solid black";
display.style.height = "20px";
//display.tabIndex = 0;

const buttonContainer = document.createElement("div");
buttonContainer.classList.add('buttonContainer');
container.appendChild(buttonContainer);
buttonContainer.style.border = "5px solid black";
buttonContainer.style.height = "30px";

const buttonClear = document.createElement("button");
buttonClear.textContent = "AC";
buttonClear.id = ('buttonClear');
buttonContainer.appendChild(buttonClear);

const buttonBackspace = document.createElement("button");
buttonBackspace.textContent = "CE";
buttonBackspace.id = ('buttonBackspace');
buttonContainer.appendChild(buttonBackspace);

const buttonDivide = document.createElement("button");
buttonDivide.textContent = "/";
buttonDivide.id = ('buttonDivide');
buttonContainer.appendChild(buttonDivide);

const buttonSeven = document.createElement("button");
buttonSeven.textContent = "7";
buttonSeven.id = ('buttonSeven');
buttonContainer.appendChild(buttonSeven);

const buttonEight = document.createElement("button");
buttonEight.textContent = "8";
buttonEight.id = ('buttonEight');
buttonContainer.appendChild(buttonEight);

const buttonNine = document.createElement("button");
buttonNine.textContent = "9";
buttonNine.id = ('buttonNine');
buttonContainer.appendChild(buttonNine);

const buttonMultiply = document.createElement("button");
buttonMultiply.textContent = "*";
buttonMultiply.id = ('buttonMultiply');
buttonContainer.appendChild(buttonMultiply);

const buttonFour = document.createElement("button");
buttonFour.textContent = "4";
buttonFour.id = ('buttonFour');
buttonContainer.appendChild(buttonFour);

const buttonFive = document.createElement("button");
buttonFive.textContent = "5";
buttonFive.id = ('buttonFive');
buttonContainer.appendChild(buttonFive);

const buttonSix = document.createElement("button");
buttonSix.textContent = "6";
buttonSix.id = ('buttonSix');
buttonContainer.appendChild(buttonSix);

const buttonSubtract = document.createElement("button");
buttonSubtract.textContent = "-";
buttonSubtract.id = ('buttonSubtract');
buttonContainer.appendChild(buttonSubtract);

const buttonOne = document.createElement("button");
buttonOne.textContent = "1";
buttonOne.id = ('buttonOne');
buttonContainer.appendChild(buttonOne);

const buttonTwo = document.createElement("button");
buttonTwo.textContent = "2";
buttonTwo.id = ('buttonTwo');
buttonContainer.appendChild(buttonTwo);

const buttonThree = document.createElement("button");
buttonThree.textContent = "3";
buttonThree.id = ('buttonThree');
buttonContainer.appendChild(buttonThree);

const buttonAdd = document.createElement("button");
buttonAdd.textContent = "+";
buttonAdd.id = ('buttonAdd');
buttonContainer.appendChild(buttonAdd);

const buttonZero = document.createElement("button");
buttonZero.textContent = "0";
buttonZero.id = ('buttonZero');
buttonContainer.appendChild(buttonZero);

const buttonDecimal = document.createElement("button");
buttonDecimal.textContent = ".";
buttonDecimal.id = ('buttonDecimal');
buttonContainer.appendChild(buttonDecimal);

const buttonEquals = document.createElement("button");
buttonEquals.textContent = "=";
buttonEquals.id = ('buttonEquals');
buttonContainer.appendChild(buttonEquals);

let firstInt = '';
let operator = '';
let secondInt = '';

const add = function(firstInt, secondInt) {
	return firstInt + secondInt;
};

const subtract = function(firstInt, secondInt) {
    return firstInt - secondInt;
};

const multiply = function(firstInt, secondInt) {
    return firstInt * secondInt;
};

const divide = function(firstInt, secondInt) {
    if (secondInt === 0) {
        return "Error";
    }
    else {
        let divisor = firstInt / secondInt; 
        return divisor.toFixed(11);
    }
};

const operate = function(firstInt, operator, secondInt) {
    let parsedfirstInt = Number(firstInt);
    let parsedSecondInt = Number(secondInt);

    if (secondInt === '') {
        return parsedFirstInt;
    }
    
    if (operator === "+") {
        return add(parsedfirstInt, parsedSecondInt);
    } else if (operator === "-") {
        return subtract(parsedfirstInt, parsedSecondInt);
    } else if (operator === "*") {
        return multiply(parsedfirstInt, parsedSecondInt);
    } else if (operator === "/") {
        return divide(parsedfirstInt, parsedSecondInt);
    }
}

// const displayOutput = function(firstInt, operator, secondInt) {

// }

let justCalculated = false;

// display.addEventListener("click", (event) => {
//     display.focus();
// })

const clearButtons = document.querySelectorAll('#buttonClear, #buttonBackspace');

clearButtons.forEach(button => {
    button.addEventListener("mousedown", (event) => {
    button.style.background = "grey";
})

button.addEventListener("mouseup", (event) => {
    button.style.background = "rgb(55, 55, 55)";
})
})

const digitButtons = document.querySelectorAll('#buttonZero, #buttonOne, #buttonTwo, #buttonThree, #buttonFour, #buttonFive, #buttonSix, #buttonSeven, #buttonEight, #buttonNine');

digitButtons.forEach(button => {
    button.addEventListener("mousedown", (event) => {
    button.style.background = "grey";
})

button.addEventListener("mouseup", (event) => {
    button.style.background = "rgb(70, 70, 70)";
})
})

const operatorButtons = document.querySelectorAll('#buttonAdd, #buttonSubtract, #buttonMultiply, #buttonDivide');

operatorButtons.forEach(button => {
    button.addEventListener("mousedown", (event) => {
    button.style.background = "grey";
})

button.addEventListener("mouseup", (event) => {
    button.style.background = "yellow";
})
})

buttonContainer.addEventListener('click', (event) => {
    const target = event.target.closest('button'); // finds nearest <button>
    if (!target) return; // click wasn't on a button

    //let finished = operate(firstInt, operator, secondInt);

    switch(target.id) {
        case 'buttonClear':
            display.textContent = '';
            firstInt = '';
            operator = '';
            secondInt = '';
            break;
        case 'buttonBackspace':
            if (justCalculated == true) {
                display.textContent = display.textContent.slice(0, -1);
                justCalculated = false; // reset the flag
                break;
            }
            if (operator === '') {
                // Editing firstInt
                firstInt = firstInt.slice(0, -1);
            } else if (secondInt === '') {
                // Operator is set but no second number yet
                operator = '';
            } else {
                // Editing secondInt
                secondInt = secondInt.slice(0, -1);
            }
            display.textContent = display.textContent.slice(0, -1);
            break;
        case 'buttonZero':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 0;
            } else {
                firstInt += 0;
            }
            display.textContent += '0';
            break;
        case 'buttonOne':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 1;
            } else {
                firstInt += 1;
            }
            display.textContent += '1';
            break;
        case 'buttonTwo':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 2;
            } else {
                firstInt += 2;
            }
            display.textContent += '2';
            break;
        case 'buttonThree':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 3;
            } else {
                firstInt += 3;
            }
            display.textContent += '3';
            break;
        case 'buttonFour':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 4;
            } else {
                firstInt += 4;
            }
            display.textContent += '4';
            break;
        case 'buttonFive':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 5;
            } else {
                firstInt += 5;
            }
            display.textContent += '5';
            break;
        case 'buttonSix':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 6;
            } else {
                firstInt += 6;
            }
            display.textContent += '6';
            break;
        case 'buttonSeven':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 7;
            } else {
                firstInt += 7;
            }
            display.textContent += '7';
            break;
        case 'buttonEight':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 8;
            } else {
                firstInt += 8;
            }
            display.textContent += '8';
            break;
        case 'buttonNine':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 9;
            } else {
                firstInt += 9;
            }
            display.textContent += '9';
            break;
        case 'buttonAdd':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '+';
                display.textContent += '+';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "+";
            display.textContent += operator;
            break;
        case 'buttonSubtract':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '-';
                display.textContent += '-';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "-";
            display.textContent += operator;
            break;
        case 'buttonMultiply':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '*';
                display.textContent += '*';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "*";
            display.textContent += operator;
            break;
        case 'buttonDivide':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '/';
                display.textContent += '/';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "/";
            display.textContent += operator;
            break;
        case 'buttonDecimal':
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                if (secondInt.includes('.')) break;
                secondInt += ".";
            } else {
                if (firstInt.includes('.')) break;
                firstInt += ".";
            }
            display.textContent += '.';
            break;
        case 'buttonEquals':
            if (secondInt === '') {
                display.textContent = firstInt;
                break;
            }
            display.textContent = operate(firstInt, operator, secondInt);
            firstInt = operate(firstInt, operator, secondInt);
            secondInt = '';
            operator = '';
            justCalculated = true;
            break;
    }
});

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'Escape':
            display.textContent = '';
            firstInt = '';
            operator = '';
            secondInt = '';
            break;
        case 'Backspace':
            if (justCalculated == true) {
                display.textContent = display.textContent.slice(0, -1);
                justCalculated = false; // reset the flag
                break;
            }
            if (operator === '') {
                // Editing firstInt
                firstInt = firstInt.slice(0, -1);
            } else if (secondInt === '') {
                // Operator is set but no second number yet
                operator = '';
            } else {
                // Editing secondInt
                secondInt = secondInt.slice(0, -1);
            }
            display.textContent = display.textContent.slice(0, -1);
            break;
        case '0':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 0;
            } else {
                firstInt += 0;
            }
            display.textContent += '0';
            break;
        case '1':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 1;
            } else {
                firstInt += 1;
            }
            display.textContent += '1';
            break;
        case '2':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 2;
            } else {
                firstInt += 2;
            }
            display.textContent += '2';
            break;
        case '3':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 3;
            } else {
                firstInt += 3;
            }
            display.textContent += '3';
            break;
        case '4':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 4;
            } else {
                firstInt += 4;
            }
            display.textContent += '4';
            break;
        case '5':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 5;
            } else {
                firstInt += 5;
            }
            display.textContent += '5';
            break;
        case '6':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 6;
            } else {
                firstInt += 6;
            }
            display.textContent += '6';
            break;
        case '7':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 7;
            } else {
                firstInt += 7;
            }
            display.textContent += '7';
            break;
        case '8':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 8;
            } else {
                firstInt += 8;
            }
            display.textContent += '8';
            break;
        case '9':
            if (justCalculated == true) {
                display.textContent = '';
                firstInt = '';
                secondInt = '';
                operator = '';
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                secondInt += 9;
            } else {
                firstInt += 9;
            }
            display.textContent += '9';
            break;
        case '+':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '+';
                display.textContent += '+';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "+";
            display.textContent += operator;
            break;
        case '-':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '-';
                display.textContent += '-';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "-";
            display.textContent += operator;
            break;
        case '*':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '*';
                display.textContent += '*';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "*";
            display.textContent += operator;
            break;
        case '/':
            if (secondInt !== '') {
                display.textContent = operate(firstInt, operator, secondInt);
                firstInt = operate(firstInt, operator, secondInt);
                secondInt = '';
                operator = '/';
                display.textContent += '/';
                break;
            }
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (display.textContent.slice(-1) == "+" || 
            display.textContent.slice(-1) == "-" || 
            display.textContent.slice(-1) == "*" || 
            display.textContent.slice(-1) == "/") {
                display.textContent = display.textContent.slice(0, -1);
            }
            operator = "/";
            display.textContent += operator;
            break;
        case '.':
            if (justCalculated == true) {
                justCalculated = false; // reset the flag
            }
            if (operator !== '') {
                if (secondInt.includes('.')) break;
                secondInt += ".";
            } else {
                if (firstInt.includes('.')) break;
                firstInt += ".";
            }
            display.textContent += '.';
            break;
        case '=':
            if (secondInt === '') {
                display.textContent = firstInt;
                break;
            }
            display.textContent = operate(firstInt, operator, secondInt);
            firstInt = operate(firstInt, operator, secondInt);
            secondInt = '';
            operator = '';
            justCalculated = true;
            break;
    }
});