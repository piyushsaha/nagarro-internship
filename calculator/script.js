let firstOperand = '';
let secondOperand = '';
let operator = '';
let answer = '';

function displayToScreen(numberToDisplay, isAns = false) {
    document.querySelector('.screen').innerHTML = `<strong><span class="${isAns ? 'ansTxt' : ''}">${numberToDisplay}</span></strong>`;
}

function AC() {
    operator = firstOperand = secondOperand = '';
    answer = '0';
    displayToScreen('0');
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonContent = e.target.innerHTML;
        console.log({buttonContent});
        if(buttonContent === 'AC') {
            AC();
        }
        else if(buttonContent == '.' || (buttonContent <= '9' && buttonContent >= '0')) {
            selectNumber(buttonContent);
        }
        else {
            selectOperator(buttonContent);
        }
    })
});

function selectNumber(selectedNumber) {
    if (operator === "") {
        firstOperand = firstOperand.concat(selectedNumber);
        displayToScreen(firstOperand);
    }
    else {
        secondOperand += selectedNumber;
        displayToScreen(secondOperand);
    }
}

function selectOperator(selectedOperator) {
    if (operator !== "") {
        calculate();
    }
    operator = selectedOperator;
    if(operator == '√') {
        calculate();
    }
}

function calculate() {
    switch (operator) {
        case '+':
            answer = (+firstOperand) + (+secondOperand);
            displayToScreen(answer, true);
            break;
        case '-':
            answer = (+firstOperand) - (+secondOperand);
            displayToScreen(answer, true);
            break;
        case '/':
            answer = (+firstOperand) / (+secondOperand);
            displayToScreen(answer, true);
            break;
        case '×':
            answer = (+firstOperand) * (+secondOperand);
            displayToScreen(answer, true);
            break;
        case '%':
            answer = (+firstOperand) / 100;
            displayToScreen(answer, true);
            break;
        case '√':
            if(firstOperand !== '') {
                answer = Math.sqrt(+firstOperand);
                displayToScreen(answer, true);
            }
            break;
        case '^':
            answer = Math.pow(+firstOperand, +secondOperand);
            displayToScreen(answer, true);
            break;
    }
}