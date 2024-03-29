let displayValue = "";
let operatorButton = null;
let currentOperator = null;
let num1 = null;
let num2 = null;

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
    const calculatorScreen = document.querySelector(".calculator__screen");
    if (currentOperator === null) {
      displayValue = displayValue + e.target.textContent;
      num1 = displayValue;
    } else if (currentOperator && num2 === null) {
      displayValue = "";
      displayValue = displayValue + e.target.textContent;
      calculatorScreen.textContent = displayValue;
      num2 = displayValue;
    } else {
      displayValue = displayValue + e.target.textContent;
      calculatorScreen.textContent = displayValue;
      num2 = displayValue;
    }

    if (currentOperator !== null && displayValue !== "") {
    }
    calculatorScreen.textContent = displayValue;
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (operatorButton) {
      operatorButton.classList.toggle("highlight");
    }
    operatorButton = e.target;
    currentOperator = e.target.dataset.operator;
    operatorButton.classList.toggle("highlight");
  });
});

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", (e) => {
  if (this[currentOperator] && num1 !== null && num2 !== null) {
    let result = operate(this[currentOperator], Number(num1), Number(num2));

    result = result.toString();

    if (result.length > 11) {
      result = (
        Math.round(Number(result) * 10000000000) / 10000000000
      ).toString();
    }
    const calculatorScreen = document.querySelector(".calculator__screen");
    calculatorScreen.textContent = result;
    num1 = result;
    num2 = null;
    currentOperator = null;
    operatorButton.classList.toggle("highlight");
    operatorButton = null;
  }
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", (e) => {
  const calculatorScreen = document.querySelector(".calculator__screen");
  calculatorScreen.textContent = "";
  num1 = null;
  num2 = null;
  currentOperator = null;
  if (operatorButton) {
    operatorButton.classList.toggle("highlight");
    operatorButton = null;
  }
  displayValue = "";
});
