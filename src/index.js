import '../sass/main.scss';
console.log('calculator!')

const output = document.getElementById('calc-output');
const btns = document.querySelectorAll('.btn-container__btn');
let firstNum = null;

function multiply (x, y) {
    return x * y;
}

function add (x,y) {
    return x + y;
}

let calcState = {
    numFlag: false,
    arithmetic: null,
}

for (var i = 0;i < btns.length;i++) {
    btns[i].onclick = function (e) {
        if (isNaN(e.target.innerHTML)) {
            calcFunctions(e.target.innerHTML);
        } else {
            calcNumbers(e.target.innerHTML);
        }
    }
}

function calcNumbers (num) {
    console.log(num)
    if (calcState.numFlag) {
        output.innerHTML = num;
        calcState.numFlag = false;
        return;
    }
    
    if (output.innerHTML === '0' && num === '.') {
        output.innerHTML = output.innerHTML + num;
        return;
    }
    
    if (output.innerHTML === '0') {
        output.innerHTML = num;
        return;
    }
    // var Number = Number + num;
    output.innerHTML = output.innerHTML + num;
}

function calcFunctions (func) {
    console.log(func)
    switch (func) {
        case '.':
            if (!output.innerHTML.includes('.')) {
                calcNumbers(func);
            }
            break;
        case 'AC':
            output.innerHTML = '0';
            break;
        case '+':
            firstNum = output.innerHTML;
            calcState.numFlag = true;
            calcState.arithmetic = add;
            break;
        case 'x':
            firstNum = output.innerHTML;
            calcState.numFlag = true;
            calcState.arithmetic = multiply;
            break;
        case '\u00F7':
            console.log('division');
        case '=':
            equalsFn(calcState.arithmetic);
            break;
        default:
            break;
    }
    
}

function equalsFn (arithmetic) {
    output.innerHTML = arithmetic(Number(firstNum), Number(output.innerHTML));
}

