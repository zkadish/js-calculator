var array = [1,2,3];
var index = 0;

if (array[0] === 1 || array[2] === '3') {
    // console.log('this is an "or" expression')
}

if (array[0] === 1 && array[2] === '3') {
    // console.log('this is an "and" expression')
}

index === 0 ? console.log(array) : console.log('else nothing');
// var test = index === 0 ? 0 : 'test';

// var test;
// if (index === 0) {
//     test = 0;
// } else {
//     test = 'test';
// }

// var test = if (true) { test = 0 };

console.log()