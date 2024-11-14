// script.js
let currentInput = '';   // Stores current input on the display
let currentOperator = ''; // Stores the current operator
let firstValue = null;    // Stores the first value for the operation

// Select the display input
const display = document.getElementById('display');

// Function to handle digit button clicks
function handleDigit(digit) {
  currentInput += digit;
  display.value = currentInput;
}

// Function to handle operator button clicks
function handleOperator(operator) {
  if (firstValue === null) {
    firstValue = parseFloat(currentInput);
  } else if (currentInput) {
    performCalculation();
    firstValue = parseFloat(display.value);
  }
  currentOperator = operator;
  currentInput = '';
}

// Function to perform calculation based on the operator
function performCalculation() {
  let result;
  let secondValue = parseFloat(currentInput);
  
  switch (currentOperator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      if (secondValue === 0) {
        result = 'Error';
      } else {
        result = firstValue / secondValue;
      }
      break;
    default:
      return;
  }
  
  display.value = result;
  currentInput = result.toString();
  currentOperator = '';
  firstValue = null;
}

// Function to handle clear button
function handleClear() {
  currentInput = '';
  firstValue = null;
  currentOperator = '';
  display.value = '';
}

// Add event listeners for all buttons
document.getElementById('btn-0').addEventListener('click', () => handleDigit('0'));
document.getElementById('btn-1').addEventListener('click', () => handleDigit('1'));
document.getElementById('btn-2').addEventListener('click', () => handleDigit('2'));
document.getElementById('btn-3').addEventListener('click', () => handleDigit('3'));
document.getElementById('btn-4').addEventListener('click', () => handleDigit('4'));
document.getElementById('btn-5').addEventListener('click', () => handleDigit('5'));
document.getElementById('btn-6').addEventListener('click', () => handleDigit('6'));
document.getElementById('btn-7').addEventListener('click', () => handleDigit('7'));
document.getElementById('btn-8').addEventListener('click', () => handleDigit('8'));
document.getElementById('btn-9').addEventListener('click', () => handleDigit('9'));

document.getElementById('btn-plus').addEventListener('click', () => handleOperator('+'));
document.getElementById('btn-minus').addEventListener('click', () => handleOperator('-'));
document.getElementById('btn-multiply').addEventListener('click', () => handleOperator('*'));
document.getElementById('btn-divide').addEventListener('click', () => handleOperator('/'));

document.getElementById('btn-equals').addEventListener('click', performCalculation);

document.getElementById('btn-clear').addEventListener('click', handleClear);
