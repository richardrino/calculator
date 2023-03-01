let displayValue = "";
let currentOperator = null;
let num1 = 0;
let num2 = 0;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  let result = operator(num1, num2);
  return result;
}

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    displayValue = displayValue + e.target.textContent;
  });
});
