import '../sass/main.scss';
import { add, subtract, multiply, divide, equals } from './arthimetic';

console.log('calculator!');

const output = document.getElementById('calc-output');
const btns = document.querySelectorAll('.btn-container__btn');

const calcState = {
  firstNum: null,
  secondNum: null,
  secNumFlag: false,
  equalsFlag: false,
  arithmetic: null,
};

function calcNumbers(num) {
  console.log(num, calcState.secNumFlag, calcState.equalsFlag);
  if (calcState.equalsFlag) {
    output.innerHTML = num;
    calcState.equalsFlag = false;
    return;
  }

  if (calcState.secNumFlag) {
    output.innerHTML = num;
    calcState.secNumFlag = false;
    return;
  }

  if (output.innerHTML === '0' && num === '.') {
    output.innerHTML += num;
    return;
  }

  if (output.innerHTML === '0') {
    output.innerHTML = num;
    return;
  }
  // var Number = Number + num;
  calcState.equalsFlag = false;
  output.innerHTML += num;
}

function calcFunctions(func) {
  console.log(func);

  switch (func) {
    case '=':
      if (calcState.equalsFlag === false) {
        calcState.secondNum = output.innerHTML;
      } else {
        console.log('calcState.equalsFlag: true');
        calcState.firstNum = output.innerHTML;
        calcState.secNumFlag = true;
      }

      equals(calcState, output);

      calcState.equalsFlag = true;
      return;
    case '.':
      if (!output.innerHTML.includes('.')) {
        calcNumbers(func);
      }
      break;
    case 'AC':
      output.innerHTML = '0';
      calcState.firstNum = false;
      calcState.secNumFlag = false;
      calcState.arithmetic = null;
      calcState.equalsFlag = false;
      break;
    case '+':
      if (!calcState.equalsFlag) {
        calcState.secondNum = output.innerHTML;
        equals(calcState, output);
      }
      calcState.firstNum = output.innerHTML;
      calcState.secNumFlag = true;
      calcState.arithmetic = add;
      break;
    case '\u2212':
      if (!calcState.equalsFlag) {
        calcState.secondNum = output.innerHTML;
        equals(calcState, output);
      }
      calcState.firstNum = output.innerHTML;
      calcState.secNumFlag = true;
      calcState.arithmetic = subtract;
      break;
    case 'x':
      if (!calcState.equalsFlag) {
        calcState.secondNum = output.innerHTML;
        equals(calcState, output);
      }
      calcState.firstNum = output.innerHTML;
      calcState.secNumFlag = true;
      calcState.arithmetic = multiply;
      break;
    case '\u00F7':
      if (!calcState.equalsFlag) {
        calcState.secondNum = output.innerHTML;
        equals(calcState, output);
      }
      calcState.firstNum = output.innerHTML;
      calcState.secNumFlag = true;
      calcState.arithmetic = divide;
      break;
    default:
      break;
  }

  calcState.equalsFlag = false;
}

for (let i = 0; i < btns.length; i += 1) {
  btns[i].onclick = function onclick(e) {
    if (isNaN(e.target.innerHTML)) {
      calcFunctions(e.target.innerHTML);
    } else {
      calcNumbers(e.target.innerHTML);
    }
  };
}



