// const array = ['a','b','c','d','e','f'];
// console.log(array[0]);


// for (var i = 0;i <= 5;i++) {
//     // console.log(array[i]);
//     if (array[i] >= 2) {
//         // console.log('I see how this works!')
//     } else if (array[i] === 'f') {
//         // console.log('this is the end of the array!')
//     } else {
//         // console.log('these are the other indices!')
//     }
// }
let grid = 8;
let result = '';
let even = false;
for (var i = 1;i <= (grid * grid);i++) {
    if (!even) {
        if (i % 2 === 0) {
            result = result + '#';
        } else {
            result = result + ' ';
        }
    } else {
        if (i % 2 === 0) {
            result = result + ' ';
        } else {
            result = result + '#';
        }
    }
    
    if (i % 8 === 0) {
        result = result + '\n';
        even = !even;
    }
}
// console.log(result);