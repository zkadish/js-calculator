export const multiply = function multiply(x, y) {
  return x * y;
};

export const divide = function divide(x, y) {
  return x / y;
};

export const add = function add(x, y) {
  return x + y;
};

export const subtract = function subtract(x, y) {
  return x - y;
};

export const equals = function equals(state, DOM) {
  const calcState = state;
  const output = DOM;
  console.log(state);

  output.innerHTML = calcState.arithmetic(Number(calcState.firstNum), Number(calcState.secondNum));
};
